function Footer() {

  const ano = new Date().getFullYear();

  return (
    <footer className="rodape">

      <p>
        Desenvolvido com React + JSON Server
      </p>

      <span>
        © {ano} • Luan Pereira 
      </span>

    </footer>
  );
}

export default Footer;