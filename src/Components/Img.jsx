import "./css/ImgCard.css";
import imgCard from "../assets/img-card-2.jpg"

const Img = (props)=> {
    return(
        <div className="image-card">
            <img src={imgCard} alt={props.caption || 'imagem'}  className="image-card-img" />
            <p className="image-card-caption">{props.caption}</p>
        </div>
    )
}

export default Img;