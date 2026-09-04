function ListaProduto({ produtos, onExcluir, onAlterar}) {
    if (produtos.length === 0) {
        return <p>Nenhuma produto cadastrado.</p>;
    }

    return (
        <section className="lista">
            {produtos.map((produto) => (
                <article className="produto" key={produto.id}>
                    <div>
                        <h2 className={produto.concluida ? "concluida" : ""}>
                            {produto.titulo}
                        </h2>
                        <span>
                            {produto.concluida ? "Concluida" : "Pendente"}
                        </span>
                    </div>

                    <div className="acoes">
                        <button type="button" onClick={() => onAlterar(produto)}>
                            {produto.concluida ? "Reabrir" : "Concluir"}
                        </button>

                        <button type="button" className="botao-excluir" onClick={() => onExcluir(produto.id)}>
                            Excluir
                        </button>
                    </div>
                </article>
            )) }
        </section>
    )
}

export default ListaProduto;