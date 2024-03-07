

import React from 'react'
import ItemCountContainer from '../../common/ItemCountContainer'

const ItemDetail = ( {item , onAdd, initial}) => {

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
        <div className="contadorItem">
          <ItemCountContainer stock={item.stock} onAdd={onAdd} initial={initial}/>
        </div>
      </div>
    </>
)
}

export default ItemDetail