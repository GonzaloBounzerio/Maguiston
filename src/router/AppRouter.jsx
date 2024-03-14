import { Routes , Route } from "react-router-dom"
import { routes } from "./routes"
import LayoutContainer from "../components/layout/LayoutContainer"


const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route element={<LayoutContainer/>}>
                {
                routes.map ( ({id,path,Element}) => <Route key={id} path={path} element={<Element/>}/>)
                }
            </Route>
        <Route path="*" element={<h2>404 not found</h2>}/>
      </Routes>
    </>
  )
}

export default AppRouter