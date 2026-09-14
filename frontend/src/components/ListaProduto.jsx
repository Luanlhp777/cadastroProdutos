import { useState } from "react";

function ListaProduto({ produtos, onExcluir, onAlterar }) {

    const [idEditando, setIdEditando] = useState(null);
    const [nomeEditado, setNomeEditado] = useState("");
    const [precoEditado, setPrecoEditado] = useState("");

    if (produtos.length === 0) {
        return <p>Nenhum produto cadastrado.</p>;
    }

    function iniciarEdicao(produto) {
        setIdEditando(produto.id);
        setNomeEditado(produto.nome);
        setPrecoEditado(produto.preco);
    }

    function cancelarEdicao() {
        setIdEditando(null);
        setNomeEditado("");
        setPrecoEditado("");
    }

    async function salvarEdicao(produto) {

        if (!nomeEditado.trim() || precoEditado === "") {
            alert("Preencha o nome e o preço do produto.");
            return;
        }

        const produtoAtualizado = {
            ...produto,
            nome: nomeEditado,
            preco: Number(precoEditado)
        };

        await onAlterar(produtoAtualizado);

        cancelarEdicao();
    }

    return (
        <section className="lista">

            {produtos.map((produto) => (

                <article className="produto" key={produto.id}>
                    {idEditando === produto.id ? (
                        <>
                            <div>
                                <input type="text" value={nomeEditado}
                                    onChange={(event) =>
                                        setNomeEditado(event.target.value)
                                    }
                                    placeholder="Nome do produto"
                                />

                                <input type="number" step="0.01" min="0" value={precoEditado}
                                    onChange={(event) =>
                                        setPrecoEditado(event.target.value)
                                    }
                                    placeholder="Preço"
                                />
                            </div>

                            <div className="acoes">
                                <button type="button" onClick={() => salvarEdicao(produto)}>
                                    Salvar
                                </button>

                                <button type="button" onClick={cancelarEdicao}>
                                    Cancelar
                                </button>
                            </div>
                        </>

                    ) : (

                        <>
                            <div>
                                <h2>
                                    {produto.nome}
                                </h2>

                                <span>
                                    {Number(produto.preco).toLocaleString("pt-BR",
                                        {
                                            style: "currency",
                                            currency: "BRL"
                                        }
                                    )}
                                </span>
                            </div>

                            <div className="acoes">
                                <button type="button" onClick={() => iniciarEdicao(produto)}>
                                    Alterar
                                </button>

                                <button type="button" className="botao-excluir" onClick={() => onExcluir(produto.id)}>
                                    Excluir
                                </button>
                            </div>
                        </>
                    )}
                </article>
            ))}
        </section>
    );
}

export default ListaProduto;