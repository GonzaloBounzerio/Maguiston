import "./App.css"
import HomeContainer from "./components/pages/home/HomeContainer"
import CartContainer from "./components/pages/cart/CartContainer"
import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailCOntainer"
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer"
import {BrowserRouter,Route,Routes,} from "react-router-dom"
import LayoutContainer from "./components/layout/LayoutContainer"
import CheckOutContainer from "./components/pages/checkOut/CheckOutContainer"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutContainer/>}>
            <Route path="/" element={<HomeContainer/>}/>
            <Route path="/cart" element={<CartContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/albumes/:autorID" element={<ItemListContainer/>}/>
            <Route path="/checkout" element={<CheckOutContainer/>}/>
            <Route path="*" element={<h2>404 not found</h2>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
    )
}

export default App
