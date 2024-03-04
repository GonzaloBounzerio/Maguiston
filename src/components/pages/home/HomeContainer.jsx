
import { useState } from "react"
import HomePage from "./HomePage"

const HomeContainer = () => {

  const [isLoading,setIsLoading] = useState(true)

  setTimeout( () => {
    setIsLoading(false)
  },1000)

  return (
    <>
     { isLoading ? <h2>Cargando...</h2> : <HomePage/>}
    </>
  )
}

export default HomeContainer