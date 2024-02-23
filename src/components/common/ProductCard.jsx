
import "./ProductCard.css"

const ProductCard = ({title,autor,año,price,img}) => {
  return (
    <div className="cardBody">
        <div className="imageCard">
          <img src={img} alt="" />    
        </div>
        <div className="cardText">
            <div className="descripCard">
                <h3>{title}</h3>
                <h4>{autor}</h4>
                <h4>{año}</h4>
            </div>
            <div className="precioCard">
                <h3>{price}</h3>
            </div>
        </div>
    </div>
  )
}

export default ProductCard