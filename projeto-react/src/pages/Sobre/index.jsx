import "./sobre.css"

export default function index() {
  return (
    <section className="container-sobre">
        <h1>Sobre</h1>
        <p>
           O Lorem Ipsum é um site utilizado para gerar textos fictícios que ajudam no desenvolvimento e na apresentação de páginas da web. Ele é muito usado por designers e desenvolvedores para preencher espaços de conteúdo antes que o texto definitivo esteja pronto.

        </p>
        <button className="delete"><a href="https://www.lipsum.com/" target="blank">Saiba mais!</a></button>
    </section>
  )
}
