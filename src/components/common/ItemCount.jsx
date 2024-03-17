import { BadgeMinus, BadgePlus, BaggageClaim } from "lucide-react"
import "./ItemCount.css"



const ItemCount = ({counter,addOne,subOne,onAdd}) => {



  return (
    <> 
        <div className="btnesCart">
            <span id="sumaBtn" onClick={addOne}> <BadgePlus/> </span>
            <h5 id="counterItem" >{counter}</h5>
            <span id="restBtn" onClick={subOne} disabled={counter === 1 ? true : false} > <BadgeMinus/> </span>
            <span id="cartBtn" onClick={()=>(onAdd(counter))}><BaggageClaim size={30}/><label>Agregar al carrito</label></span>
        </div>
    </>
  )
}

export default ItemCount