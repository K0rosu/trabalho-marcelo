function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o valor digitado no campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Se o campo de pesquisa estiver vazio, exibe uma mensagem
    if (campoPesquisa == "") {
        section.innerHTML = "<p class='return'>Nada foi encontrado :(</p>";
        return;
    }

    // Converte o texto para minúsculas para facilitar a comparação
    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        // Se o título ou as tags contêm o termo de pesquisa, exibe o resultado
        if (titulo.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>
                <a class="titulo" href="#">${dado.titulo}</a>
                </h2>
                <img class="imagem" src="${dado.imagem}"></img> <img class="gif" src="${dado.gif}"></img> 
                <p class="descricao-meta">${dado.descricao}</p>
                <a class="link" href="${dado.link}" target="_blank">Mais informações</a>
            </div>
            `;
        }
    }

    // Se nenhum resultado for encontrado, exibe uma mensagem
    if (!resultados) {
        resultados = "<p class='return'>Nada foi encontrado :(</p>";
    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}

function filtrarMonstros(categoria) {
    // Obtém a seção HTML onde os resultados serão exibidos
    const section = document.getElementById('resultados-pesquisa');

    // Converte a categoria para minúsculas
    categoria = categoria.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        let tags = dado.tags.toLowerCase();

        // Verifica se a tag do dado corresponde à categoria selecionada
        if (tags.includes(categoria)) {
            // Constrói o HTML para cada item do resultado
            resultados += `
            <div class="item-resultado">
                <h2>
                <a class="titulo" href="${dado.link}" target="_blank">${dado.titulo}</a>
                </h2>
                <img class="imagem" src="${dado.imagem}"></img> <img class="gif" src="${dado.gif}"></img> 
                <p class="descricao-meta">${dado.descricao}</p>
                <a class="link" href="${dado.link}" target="_blank">Mais informações</a>
            </div>
            `;
        }
    }

    // Se nenhum resultado for encontrado, exibe uma mensagem
    if (!resultados) {
        resultados = "<p class='return'>Nenhum monstro encontrado nessa categoria :(</p>";
    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}
