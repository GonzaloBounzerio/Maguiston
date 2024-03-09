import ItemList from "./ItemList"
import {getProducts, products} from "../../../productMock"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "../../../firebaseConfig"
import { collection, getDocs , query , where} from "firebase/firestore"


const ItemListContainer = () => {

  const {autorID} = useParams();
  const [items,setItems] = useState([]);
  const [isLoading,setIsLoading] = useState(true);

useEffect( () => {
  setIsLoading(true)

  let productsCollection = collection( db , "products" )
  
  let consulta = productsCollection
  
  if (autorID){
    let productsCollectionFiltered = query( productsCollection , where( "autorID" , "==", autorID )) 
    consulta = productsCollectionFiltered
  }
  
  getDocs(consulta).then( res => {
    let arrayData = res.docs.map( (elemento) => {
      return {...elemento.data(), id:elemento.id}
    })
    setItems(arrayData)
  }).finally( () => setIsLoading(false))

}, [autorID])

  return (
     <>
     {isLoading ? <h2>Cargando albumes...</h2> : <ItemList items={items}/> }
     
     </> 
  )
}

export default ItemListContainer