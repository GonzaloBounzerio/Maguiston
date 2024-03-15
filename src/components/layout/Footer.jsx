
import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <div className="bodyFooter">
        <div className="divContacto">
          <a target="_blank" href="https://github.com/GonzaloBounzerio?tab=repositories"><h3>Mis Proyectos</h3></a>
        </div>
        <div className="divLogo">
        <Link style={{ color:(0, 0, 0, 0.877) , textDecoration: 'none' }} to={"/"}><h3>Volver al Inicio</h3></Link>
        </div>
      </div>
    </>
  )
}

export default Footer