import { useState } from "react"
import ItemCount from "./ItemCount";
import Swal from "sweetalert2";


const ItemCountContainer = ( {stock , onAdd, initial=1}) => {  //si llega undefined ponele =1

const[counter,setCounter]=useState(initial);



const addOne = () => {
    if (counter<stock){
        setCounter(counter+1)
    } else {
      Swal.fire({
        icon:"warning",
        text: "No disponemos de más unidades para agregar"
      });
    }
};

const subOne = () => {
    if (counter> 1) {
        setCounter(counter-1)
    } else {
      Swal.fire({
        icon:"error",
        text: "No puedes agregar menos de 1 unidad"
      });
    }
};


  return (
    <>
      <ItemCount counter={counter} addOne={addOne} subOne={subOne} onAdd={onAdd} />
    </>
  )
}

export default ItemCountContainer