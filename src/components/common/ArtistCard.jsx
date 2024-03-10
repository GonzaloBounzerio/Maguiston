
import { Link } from "react-router-dom"
import "./ArtistCard.css"
import React from 'react'

const ArtistCard = ({autorID,name,img}) => {
  return (
    <>
    <div className="artistCardBody">
      <div className="artistImgHome">
        <img src={img} alt="foto artista" />
      </div>
      <div className="artistNomHome">
        <Link style={{ color: '#302B31', textDecoration: 'none' }} to={`/albumes/${autorID}`}><h2>{name}</h2></Link>
      </div>
    </div>
    </>
  )
}

export default ArtistCard