
import { ShieldAlert } from "lucide-react"
import "./ErrorPage.css"
import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <div className="bodyErrorPage">
      <h1>Maguiston</h1>
      <h3>Error 404: La página que busca no está disponible</h3>
      <span className="iconError"><ShieldAlert size={250}/></span>
      <Link to={"/"}>
        <button>Volver al Inicio</button>
      </Link>
    </div>
  )
}

export default ErrorPage