
import ProductCard from "../common/ProductCard"
import "./ItemListContainer.css"

const ItemListContainer = () => {
  return (
    <div className="bodyItemList">
        <div className="containerProductCard">
            <ProductCard nom={"zapatillas"} precio={"3200"} descrip={"son las mejores"}/>
            <ProductCard nom={"pantalon"} precio={"1400"} descrip={"son casi mejores"}/>
            <ProductCard nom={"gorra"} precio={"700"} descrip={"feas"}/>
            <ProductCard nom={"medias"} precio={"150"} descrip={"son las mejores"}/>
            <ProductCard nom={"campera"} precio={"4200"} descrip={"abrigadas"}/>   
        </div>
    </div>
  )
}

export default ItemListContainer