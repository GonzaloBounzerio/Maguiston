
import { useNavigate, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { getProduct } from '../../../productMock';

const ItemDetailContainer = () => {

    const { id } = useParams();


        const [item, setItem] = useState(null)
        const [isLoading,setIsLoading] = useState(true)

       // const navigate = useNavigate()

        useEffect(()=>{
            getProduct(id)
                .then(resp => {
                    setItem(resp)
                    setIsLoading(false)
                })
        },[id])

        const onAdd = ( cant ) => {
          let infoProducto = {
            ...item,
            quantity:cantidad,
          }
          //navigate("/cart") navigate(-1) te vuelve una pag atras
        }
        

  return (
    <>
      {isLoading ? 
      (<h2>Cargando album...</h2>
      ) :( 
      <ItemDetail item={item} onAdd={onAdd}/> 
      ) }
    </>
  )
}

export default ItemDetailContainer