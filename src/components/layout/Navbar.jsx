
import {Link} from "react-router-dom"
import Counter from "..//common/Counter"
import { ShoppingCart} from 'lucide-react';
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="bodyNavbar">
        <div className="tituloNavbar">
            <h1>Maguiston</h1>
            <h4>Música para llevar</h4>
        </div>
        <div className="cartNavbar">
            <Counter />
            <div className="btnCart">
              <Link to={"/cart"}> <ShoppingCart size={40} /> </Link>
            </div>
        </div>
        <div className="divSectionLinks">  
          <Link className="btnNav" to={"/"}> Inicio </Link>
          <Link className="btnNav" to={"/albumes/0"}> Albumes </Link>
          <Link className="btnNav" to={`/albumes/${1}`}> Charly García </Link>
          <Link className="btnNav" to={`/albumes/${2}`}> Gustavo Cerati </Link>
          <Link className="btnNav" to={`/albumes/${3}`}> Spinetta </Link>
        </div>
    </div>
  )
}

export default Navbar