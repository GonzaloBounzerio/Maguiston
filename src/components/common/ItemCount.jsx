


const ItemCount = ({counter,addOne,subOne,onAdd}) => {

  return (
    <> 
        <div className="btnesCart">
            <button onClick={addOne} >Sumar</button>
            <h2>{counter}</h2>
            <button onClick={subOne} disabled={counter === 1 ? true : false} >Restar</button>
            <button onClick={()=>(onAdd(counter))}>Agregar al carrito</button>
        </div>
    </>
  )
}

export default ItemCount