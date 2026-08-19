import "./css/banner.css";

const Banner = (props) => {
    return (
        <section className="titulo">
            <h1>{props.children}</h1>
        </section>
    )
}

export default Banner;