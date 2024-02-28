

import React from 'react'

const ItemDetail = ( item ) => {
  return (
    <>
      <div className="divCardDetail">
        <div className="titleDetail">
            <h1>{item.title}</h1>
            <h3>{item.autor}</h3>
        </div>
        <div className="imgDetail">
            <img src={item.img} alt="foto portada" />
        </div>
        <div className="priceDetail">
            <h3>U$D {item.price}</h3>
        </div>
        <div className="btnCartDetail">
            <button>Agregar al carrito</button>
        </div>
      </div>
    </>
)
}

export default ItemDetail