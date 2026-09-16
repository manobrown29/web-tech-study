import "./faq.css"

export default function index() {
  return (
    <section className="container-lorem">
        <h1>Perguntas Frequentes — Lorem Ipsum</h1>
        <div className="faq">
            <h2>O que é Lorem Ipsum?</h2>
            <p>Lorem Ipsum é um texto fictício utilizado para preencher espaços em sites, layouts, documentos e projetos de design.</p>
        </div>
        <div className="faq">
            <h2>Para que serve o Lorem Ipsum?</h2>
            <p>Ele serve para visualizar como um conteúdo ficará em uma página antes que o texto definitivo seja criado.</p>
        </div>
        <div className="faq">
            <h2>Lorem Ipsum é um idioma?</h2>
            <p>Não. Apesar de parecer latim, o Lorem Ipsum é um texto baseado em palavras e trechos modificados do latim.</p>
        </div>
        <div className="faq">
            <h2>Por que os desenvolvedores usam Lorem Ipsum?</h2>
            <p>Porque ele permite testar o visual e a organização de uma página sem que o conteúdo real distraia a atenção do design.</p>
        </div>
    </section>
  )
}
