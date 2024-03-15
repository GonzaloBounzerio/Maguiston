
import { useEffect, useState } from "react"
import HomePage from "./HomePage"
import { db } from "../../../firebaseConfig"
import { collection, getDocs} from "firebase/firestore"
import LoadPage from "../../common/LoadPage"


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
     { isLoading ? <LoadPage/> : <HomePage artists={artists}/>}
    </>
  )
}

export default HomeContainer