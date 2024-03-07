import { useState } from "react";
import { CheckOut } from "./CheckOut";



const CheckOutContainer = () => {

    const [userInfo,setUserInfo] = useState({
        name: "",
        lastName: "",
    })

    const envioDeFormulario = (event) => {
        event.preventDefault();
    };

    const captureData = (event) => {
        setUserInfo ( {...userInfo , [event.target.name]:event.target.value})
    }


  return (
    <> <CheckOut envioDeFormulario={envioDeFormulario} captureData={captureData}/> </>
  )
}

export default CheckOutContainer