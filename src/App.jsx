import "./App.css"
import HomeContainer from "./components/pages/home/HomeContainer"
import Cart from "./components/common/Cart"
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
        <Route path="/" element={<HomeContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/albumes/:autorID" element={<ItemListContainer/>}/>
      </Routes>
    </BrowserRouter>
    </>
    )
}

export default App
