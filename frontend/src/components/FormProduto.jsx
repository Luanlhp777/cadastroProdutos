import { useState } from "react";

function FormProduto({ onAdicionar }) {
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");

    function enviar(event) {
        event.preventDefault();

        const nomeLimpo = nome.trim();

        if(!nomeLimpo){
            return;
        }

        onAdicionar(nomeLimpo, preco);
        setNome("");
        setPreco("");
    }

    return (
        <form className="formulario" onSubmit={enviar}>
            <input 
                type="text"
                placeholder="Digite um produto: "
                value={nome}
                onChange={(event) => setNome(event.target.value)}
            />

            <input 
                type="number" 
                placeholder="Digite um valor: " 
                value={preco} 
                onChange={(event) => setPreco(event.target.value)} 
            />

            <button type="submit">Adicionar</button>
        </form>

    )
}

export default FormProduto;