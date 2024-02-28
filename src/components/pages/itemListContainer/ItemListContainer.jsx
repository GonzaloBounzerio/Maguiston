import ItemList from "./ItemList"
import {getProducts, products} from "../../../productMock"
import { useEffect, useState } from "react"


const ItemListContainer = () => {

const [items,setItems] = useState([]);
const [isLoading,setIsLoading] = useState(true);

useEffect( () => {
  getProducts()
    .then( resp => {
      setItems(resp)
      setIsLoading(false)
    })
}, [])


  return (
     <>
     {isLoading ? <h2>Cargando albumes...</h2> : <ItemList items={items}/> }
     
     </> 
  )
}

export default ItemListContainer