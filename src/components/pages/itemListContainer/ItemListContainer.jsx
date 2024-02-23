import ItemList from "./ItemList"
import {products} from "../../../productMock"
import { useEffect, useState } from "react"


const ItemListContainer = () => {

const [items,setItems] = useState([])

useEffect( () => {
  const tarea = new Promise((resolve,reject)=>{
    resolve(products)
    reject("error")
  })
  
  tarea
    .then((res)=> {
      setItems (res)
    })
    .catch((error)=>{
  
    })
  
} , [] 
);


  return (
     <>
     <ItemList items={items}/>
     </> 
  )
}

export default ItemListContainer