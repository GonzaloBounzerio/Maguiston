import { Routes , Route } from "react-router-dom"
import { routes } from "./routes"
import LayoutContainer from "../components/layout/LayoutContainer"
import ErrorPage from "../components/pages/errorPage/ErrorPage"


const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route element={<LayoutContainer/>}>
                {
                routes.map ( ({id,path,Element}) => <Route key={id} path={path} element={<Element/>}/>)
                }
            </Route>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </>
  )
}

export default AppRouter