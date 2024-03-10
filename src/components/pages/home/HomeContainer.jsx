
import { useEffect, useState } from "react"
import HomePage from "./HomePage"
import { db } from "../../../firebaseConfig"
import { collection, getDocs , query , where} from "firebase/firestore"


const HomeContainer = () => {

  const [ artists, setArtists] = useState([])

  const [isLoading,setIsLoading] = useState(true)

    useEffect( () => {
      setIsLoading(true)
      let artistCollection = collection(db,"artists")
      getDocs(artistCollection).then( res => {
        let arrayData = res.docs.map( (elemento) => {return {...elemento.data(), id:elemento.autorID}
        })       
        setArtists(arrayData)
      }).finally( () => setIsLoading(false))
    },[])

  return (
    <>
     { isLoading ? <h2>Cargando...</h2> : <HomePage artists={artists}/>}
    </>
  )
}

export default HomeContainer