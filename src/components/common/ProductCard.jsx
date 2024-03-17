
import { Link } from "react-router-dom"
import "./ProductCard.css"

const ProductCard = ({id,title,autor,año,price,img}) => {
  return (
    <div className="cardBody">
        <div className="imageCard">
          <img height={"300px"} src={img} alt="" />    
        </div>
        <div className="cardText">
            <div className="descripCard">
                <h2>{title}</h2>
                <h5>de {autor} , {año}</h5>
            </div>
            <div className="precioCard">
                <h3>${price}</h3>
            </div>
            <div className="btnMore">
              <Link to={`/item/${id}`}> <button>Ver más</button> </Link>
            </div>
        </div>
    </div>
  )
}

export default ProductCard