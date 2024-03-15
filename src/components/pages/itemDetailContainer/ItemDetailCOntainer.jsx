
import { useNavigate, useParams } from 'react-router-dom'
import React, { useContext, useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { CartContext } from '../../../context/CartContext';
import { db } from '../../../firebaseConfig';
import { collection , doc , getDoc} from "firebase/firestore"
import LoadPage from '../../common/LoadPage';

const ItemDetailContainer = () => {

    const { id } = useParams();


        const [item, setItem] = useState(null)
        const [isLoading,setIsLoading] = useState(true)

        const {addToCart,getTotalQuantityById} = useContext(CartContext)

        const initial = getTotalQuantityById(id)

       // const navigate = useNavigate()

        useEffect(()=>{
          setIsLoading(true)
          let productsCollection = collection(db,"products")
          let refDoc = doc(productsCollection,id)
          getDoc(refDoc) .then( res => {
            setItem( {...res.data() , id:res.id})
          }).finally( () => setIsLoading(false))
            
        },[id])

        const onAdd = ( cant ) => {
          let infoProducto = {
            ...item,
            quantity:cant,
          }
          addToCart(infoProducto)
          //navigate("/cart") navigate(-1) te vuelve una pag atras
        }
        

  return (
    <>
      {isLoading ? <LoadPage/> : <ItemDetail item={item} onAdd={onAdd} initial={initial}/> 
       }
    </>
  )
}

export default ItemDetailContainer