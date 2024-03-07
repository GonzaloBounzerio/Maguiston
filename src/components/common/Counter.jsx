
import "./Counter.css"
import { useState } from "react"



const Counter = () => {
    const[counter,setCounter] = useState(0)

  return (
    <div className="divCounter">
        <span>{counter}</span>
    </div>
  )
}

export default Counter