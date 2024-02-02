
import "./ProductCard.css"

const ProductCard = ({nom,precio,descrip}) => {
  return (
    <div className="cardBody">
        <div className="imageCard">
            
        </div>
        <div className="cardText">
            <div className="descripCard">
                <h3>{nom}</h3>
                <h4>{descrip}</h4>
            </div>
            <div className="precioCard">
                <h3>{precio}</h3>
            </div>
        </div>
    </div>
  )
}

export default ProductCard