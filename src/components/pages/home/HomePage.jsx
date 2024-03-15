

// import { AddDocs } from "../../../addDocs"
import ArtistCard from "../../common/ArtistCard"
import "./HomePage.css"


const HomePage = ({artists}) => {
  return (
    <>
     <div className="homeDiv">
      {/* <AddDocs/> */}
        <div className="artistasHomeDiv">
            {
              artists.map( ({autorID,name,img}) => {
                return <ArtistCard key={autorID} autorID={autorID} name={name} img={img}/>
              })
            }
        </div>
        <div className="textHomeDiv">
          <h2 className="tituloTextoHome">
            ¡Bienvenidos a la página de homenaje a Charly García, Luis Alberto Spinetta y Gustavo Cerati!
          </h2>
          <br />
          <p className="textoHome">
          ¡Bienvenido a Maguiston! En nuestro espacio, la música latina cobra vida a través de una exquisita selección de discos de Charly García, Spinetta y Cerati. Desde los clásicos que marcaron época hasta las joyas más ocultas, cada vinilo y CD que ofrecemos es un tributo a la genialidad de estos íconos.
          <br />
          <br />
          En Maguiston, no solo te invitamos a explorar y adquirir música, sino también a sumergirte en la atmósfera única que estas leyendas han creado a lo largo de sus carreras. Nuestra tienda es más que un lugar de compras; es un punto de encuentro para aquellos que comparten el amor por la música y desean rendir homenaje a aquellos que la han definido.
          <br />
          <br />
          Descubre el sonido inconfundible de Charly García, la poesía musical de Spinetta y la innovación sonora de Cerati en cada producto que ofrecemos. Únete a nuestra comunidad y deja que la música te guíe en un viaje emocional lleno de nostalgia y admiración. En Maguiston, la música vive eternamente. ¡Bienvenido!
          </p>
        </div>
     </div>
    </>
  )
}

export default HomePage