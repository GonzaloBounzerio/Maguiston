

import "./ItemDetail.css"
import ItemCountContainer from '../../common/ItemCountContainer'
import BackBtn from "../../common/BackBtn"

const ItemDetail = ( {item , onAdd, initial}) => {

  return (
    <>
      <div className="divCardDetail">
        <span className="btnBack"> <BackBtn path={"/albumes"} message={"Volver a albumes"}/> </span>
        <div className="imgDetail">
            <img height={"450px"} src={item.img} alt="foto portada" />
        </div>
        <div className="detailItem">
          <div className="titleDetail">
              <h1>"{item.title}"</h1>
              <h3>{item.autor}</h3>
          </div>
          <div className="divCompraItem">
            <div className="priceDetail">
                <h3>$ {item.price}</h3>
            </div>
            <div className="contadorItem">
              <ItemCountContainer stock={item.stock} onAdd={onAdd} initial={initial}/>
            </div>
          </div>
        </div>
      </div>
    </>
)
}

export default ItemDetail