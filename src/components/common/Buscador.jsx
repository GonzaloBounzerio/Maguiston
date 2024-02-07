
import { Search } from 'lucide-react';
import "./Buscador.css"

const Buscador = () => {
  return (
    <>
        <form>
            <input type="text" placeholder='Buscar artículos'/>
            <div className="btnSearch">
                <Search size={30}/>
            </div>
        </form>
    </>
  )
}

export default Buscador