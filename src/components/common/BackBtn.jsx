
import { ChevronLeftCircle } from "lucide-react"
import "./BackBtn.css"
import { useNavigate } from "react-router-dom"

const BackBtn = ({path}) => {

    const navigate = useNavigate()

  return (
    <div className="containBackBtn">
        <span onClick={() => {navigate(path)}}><ChevronLeftCircle/></span>
    </div>
  )
}

export default BackBtn