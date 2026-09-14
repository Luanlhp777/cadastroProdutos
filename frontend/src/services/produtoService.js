const URL_API = "http://localhost:3006/produtos";

// FUNÇÃO PARA BUSCAR 
export async function buscarProdutos() {
    const resposta = await fetch(URL_API);

    if(!resposta.ok){
        throw new Error("Erro ao buscar produtos.");

    }

    return await resposta.json();    
}

// FUNÇÃO PARA CRIAR 
export async function criarProduto(produto) {
    const resposta = await fetch(URL_API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(produto)

       
    });

    if(!resposta.ok){
        throw new Error("Erro ao criar produto.");
    }

    return await resposta.json();    
}

// ALTERAR PRODUTO
export async function atualizarProduto(id, produto) {
    const resposta = await fetch(`${URL_API}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: produto.nome,
            preco: produto.preco
        })
    });

    if (!resposta.ok) {
        throw new Error("Erro ao atualizar produto.");
    }

    return await resposta.json();
}

// FUNÇÃO PARA EXCLUIR 
export async function excluirProduto(id) {
    const resposta = await fetch(`${URL_API}/${id}`, {
        method: "DELETE"
    });

    if(!resposta.ok){
        throw new Error("Erro ao excluir produto");
    }

    return await resposta.json();
}