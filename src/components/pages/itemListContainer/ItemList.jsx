
import ProductCard from "../../common/ProductCard"
import "./ItemListContainer.css"


const ItemList = ({items}) => {

  return (
    <div className="bodyItemList">
        <div className="containerProductCard">
            {
                items.map( ({id,title,autor,año,price,img,stock}) => {
                    return <ProductCard key={id} id={id} title={title} price={price} autor={autor} año={año} img={img} stock={stock} />
                })
            }    
        </div>
    </div>
  )
}

export default ItemList