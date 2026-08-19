import palmeiras from "../assets/palmeiras.jpg"
import "./css/card.css";

const Palmeiras = (props)=> {
    return(
        <div className="card">
            <img src={palmeiras} alt={props.caption || 'imagem'} className="img-card"/>
            <p className="card-text">{props.caption}</p>
            <h2 className="card-text">{props.anoFundacao}</h2>
        </div>
    )
}

export default Palmeiras;