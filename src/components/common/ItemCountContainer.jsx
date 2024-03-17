import { useState } from "react"
import ItemCount from "./ItemCount";


const ItemCountContainer = ( {stock , onAdd, initial=1}) => {  //si llega undefined ponele =1

const[counter,setCounter]=useState(initial);



const addOne = () => {
    if (counter<stock){
        setCounter(counter+1)
    } else {
      toast.error('Alcanzaste el límite del stock')
    }
};

const subOne = () => {
    if (counter> 1) {
        setCounter(counter-1)
    } else {
      toast.error('No puedes agregar menos de 1 copia')
    }
};


  return (
    <>
      <ItemCount counter={counter} addOne={addOne} subOne={subOne} onAdd={onAdd} />
    </>
  )
}

export default ItemCountContainer