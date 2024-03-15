import { WaveSpinner } from "react-spinners-kit"
import "./LoadPage.css"

const LoadPage = () => {
  return (
     <div className="loader">
        <WaveSpinner size={150} color="#457B9D"/>
     </div>
  )
}

export default LoadPage