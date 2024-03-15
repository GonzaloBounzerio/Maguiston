import ItemList from "./ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "../../../firebaseConfig"
import { collection, getDocs , query , where} from "firebase/firestore"
import LoadPage from "../../common/LoadPage"


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
     {isLoading ? <LoadPage/> : <ItemList items={items}/> }
     
     </> 
  )
}

export default ItemListContainer