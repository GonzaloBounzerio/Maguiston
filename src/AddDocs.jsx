import {addDoc , collection} from "firebase/firestore"
import { db } from "./firebaseConfig"
import { products } from "./productMock"

export const AddDocs = () => {

    const rellenar = () => {

        let productsCollection = collection( db , "products" )
        products.forEach( (product) => {
            addDoc( productsCollection , product )
        } )

    }

  return (

    <button onClick={rellenar}>Agregar Documentos</button>
  )
}
