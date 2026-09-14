import { useEffect, useState } from "react";

import FormProduto from "./components/FormProduto.jsx";
import ListaProduto from "./components/ListaProduto.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import {
  buscarProdutos,
  criarProduto,
  atualizarProduto,
  excluirProduto,
} from "./services/produtoService.js";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    carregarProdutos();
  }, []);

  async function carregarProdutos() {
    try {
      setCarregando(true);
      setErro("");

      const dados = await buscarProdutos();
      setProdutos(dados);
    } catch (error) {
      console.error(error);
      setErro(
        "Não foi possível carregar os produtos. Verifique se a API está rodando."
      );
    } finally {
      setCarregando(false);
    }
  }

  async function adicionarProduto(nome, preco) {
    try {
      setErro("");

      const resposta = await criarProduto({
        nome: nome,
        preco: preco
      });

      const novoProduto = resposta.produto;

      setProdutos((listaAtual) => [...listaAtual, novoProduto]);
    } catch (error) {
      console.error(error);
      setErro("Não foi possível cadastrar produto.");
    }
  }

  async function removerProduto(id) {

  // Pede confirmação antes de excluir
  const confirmar = window.confirm(
    "Tem certeza que deseja excluir este produto?"
  );

  // Se clicar em Cancelar, interrompe a função
  if (!confirmar) {
    return;
  }

  try {

    setErro("");

    // DELETE na API
    await excluirProduto(id);

    // Remove a tarefa do estado
    setProdutos((listaAtual) =>
      listaAtual.filter(
        (produto) => produto.id !== id
      )
    );

  } catch (error) {

    console.error(error);

    setErro("Não foi possível excluir produto.");

  }

}

  async function alterarProduto(produto) {
    try {
      setErro("");

      const resposta = await atualizarProduto(
        produto.id,
        produto
      );

      const produtoAtualizado = resposta.produto;

      setProdutos((listaAtual) =>
        listaAtual.map((item) =>
          item.id === produto.id ? produtoAtualizado : item
        )
      );
    } catch (error) {
      console.error(error);
      setErro("Não foi possível alterar o produto.");
    }
  }

  return (
  <>
    <Header />

    <main className="container">

      <section className="apresentacao">
        <h1>Cadastro de Produtos</h1>

        <p>
          React consumindo uma API REST com Node.js, Express e MySQL
        </p>
      </section>

      <FormProduto onAdicionar={adicionarProduto} />

      {erro && (
        <p className="erro">
          {erro}
        </p>
      )}

      {carregando ? (
        <p>Carregando...</p>
      ) : (
        <ListaProduto
          produtos={produtos}
          onExcluir={removerProduto}
          onAlterar={alterarProduto}
        />
      )}

    </main>

    <Footer />
  </>
);
}

export default App;