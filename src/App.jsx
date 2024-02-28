import "./App.css"
import Cart from "./components/common/Cart"
import ProductCard from "./components/common/ProductCard"
import Navbar from "./components/layout/Navbar"
import FetchingDataContainer from "./components/pages/fetchingData/FetchingDataContainer"
import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailCOntainer"
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer"
import {BrowserRouter,Route,Routes,} from "react-router-dom"

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
    )
}

export default App
