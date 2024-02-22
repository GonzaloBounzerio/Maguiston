
import Counter from "..//common/Counter"
import Buscador from '../common/buscador';
import { ShoppingCart , Menu, Pointer, PointerIcon } from 'lucide-react';
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="bodyNavbar">
        <div className="menuNavbar">
          <div className="btnMenuNavbar">
            <Menu />
          </div>
        </div>
        <div className="tituloNavbar">
            <h1>Maguiston</h1>
            <h4>Música para llevar</h4>
        </div>
        <div className="buscadorNavbar">
            <Buscador />
        </div>
        <div className="cartNavbar">
            <Counter />
            <div className="btnCart">
              <ShoppingCart size={40} />
            </div>
        </div>
    </div>
  )
}

export default Navbar