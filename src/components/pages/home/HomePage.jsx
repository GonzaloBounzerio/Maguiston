

import ArtistCard from "../../common/ArtistCard"
import "./HomePage.css"


const HomePage = ({artists}) => {
  return (
    <>
     <div className="homeDiv">
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
            En este espacio dedicado a la memoria y el legado de tres gigantes del rock argentino, nos sumergimos en la profunda influencia que Charly García, Luis Alberto Spinetta y Gustavo Cerati han tenido en la música y la cultura no solo de Argentina, sino de todo el mundo hispanohablante.
            <br />
            Charly García, el genio indiscutible, ha sido la encarnación misma de la innovación y la irreverencia en la música. Desde los días pioneros de Sui Generis hasta sus aventuras en solitario, Charly ha desafiado las normas establecidas, sorprendiendo y deleitando a generaciones con su habilidad musical y su poesía desgarradora.
            <br />
            Luis Alberto Spinetta, conocido afectuosamente como "El Flaco", nos ha regalado un vasto y enriquecedor catálogo de música que trasciende el tiempo y el espacio. Su habilidad para tejer letras profundas con melodías etéreas ha hecho de él un verdadero poeta de la música, cuyo legado perdura en el corazón de millones de admiradores.
            <br />
            Gustavo Cerati, líder visionario de Soda Stereo y maestro del sonido, nos llevó en un viaje emocional a través de paisajes sonoros nunca antes explorados. Su búsqueda constante de la excelencia musical y su capacidad para fusionar géneros lo convirtieron en un ícono de la vanguardia musical latinoamericana.
            <br />
            A través de esta página, celebramos la vida y la obra de estos tres artistas excepcionales. Exploraremos sus canciones más emblemáticas, compartiremos anécdotas inspiradoras y recordaremos cómo sus contribuciones han dejado una marca indeleble en la historia del rock y la cultura popular.
            <br />
            Únete a nosotros en este viaje nostálgico y emocionante mientras rendimos homenaje a Charly García, Luis Alberto Spinetta y Gustavo Cerati, tres leyendas que seguirán viviendo a través de su música.
          </p>
        </div>
     </div>
    </>
  )
}

export default HomePage