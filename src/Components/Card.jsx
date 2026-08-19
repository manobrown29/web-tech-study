import imgCard from "../assets/img-card.jpg"
import "./css/card.css";

const Card = () => {
    return (
        <section>
            <article className="card">
                <img src={imgCard} className="img-card"/>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, dolore, similique maiores cumque neque quo alias cum voluptatem dolorum perferendis obcaecati veritatis ad vero doloremque at sed accusantium totam inventore!</p>
            </article> 
        </section>
    )
}

export default Card;