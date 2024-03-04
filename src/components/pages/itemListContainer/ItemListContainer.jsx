import ItemList from "./ItemList"
import {getProducts, products} from "../../../productMock"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const ItemListContainer = () => {

  const {autorID} = useParams();
  const [items,setItems] = useState([]);
  const [isLoading,setIsLoading] = useState(true);

useEffect( () => {
  setIsLoading(true)
  getProducts()
    .then( (resp) => {

      if (autorID!=0) {
        const productsFilter = resp.filter((product) => product.autorID == autorID);
        setItems(productsFilter);
      } else {
        setItems(resp);
      }

      setIsLoading(false)
    })
}, [autorID])

  return (
     <>
     {isLoading ? <h2>Cargando albumes...</h2> : <ItemList items={items}/> }
     
     </> 
  )
}

export default ItemListContainer