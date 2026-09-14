function Footer() {

  const ano = new Date().getFullYear();

  return (
    <footer className="rodape">

      <p>
        Desenvolvido com React + Node.js + Express + MySQL
      </p>

      <span>
        © {ano} • Luan Pereira 
      </span>

    </footer>
  );
}

export default Footer;