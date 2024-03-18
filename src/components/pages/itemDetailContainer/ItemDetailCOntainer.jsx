
import { useParams } from 'react-router-dom'
import React, { useContext, useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { CartContext } from '../../../context/CartContext';
import { db } from '../../../firebaseConfig';
import { collection , doc , getDoc} from "firebase/firestore"
import LoadPage from '../../common/LoadPage';
import Swal from 'sweetalert2';

const ItemDetailContainer = () => {

    const { id } = useParams();


        const [item, setItem] = useState(null)
        const [isLoading,setIsLoading] = useState(true)

        const {addToCart,getTotalQuantityById} = useContext(CartContext)

        const initial = getTotalQuantityById(id)


        useEffect(()=>{
          setIsLoading(true)
          let productsCollection = collection(db,"products")
          let refDoc = doc(productsCollection,id)
          getDoc(refDoc) .then( res => {
            setItem( {...res.data() , id:res.id})
          }).finally( () => setIsLoading(false))
            
        },[id])

        const onAdd = ( cant ) => {

          Swal.fire({
            title: `¿Querés agregar ${cant} unidades al carrito?`,
            text: "Confirma tu elección",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Agregar"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Productos agregados al carrito con éxito",
                text: "Sigue navegando y agregando más discos",
                icon: "success"
              });
              let infoProducto = {
                ...item,
                quantity:cant,
              }
              addToCart(infoProducto)
            }
          });

        }
        

  return (
    <>
      {isLoading ? <LoadPage/> : <ItemDetail item={item} onAdd={onAdd} initial={initial}/> 
       }
    </>
  )
}

export default ItemDetailContainer