const URL_API = "http://localhost:3000/produtos";

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

    console.log(produto)

    if(!resposta.ok){
        throw new Error("Erro ao criar produto.");
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
}

// FUNÇÃO PARA ATUALIZAR STATUS
export async function atualizarStatus(id, concluida) {
  const resposta = await fetch(`${URL_API}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      concluida: concluida
    })
  });

  if (!resposta.ok) {
    throw new Error("Erro ao atualizar tarefa");
  }

  return await resposta.json();
}