import "./App.css"
import Navbar from "./components/layout/Navbar"
import ItemListContainer from "./components/pages/ItemListContainer"

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting='holaaaaaaaaaaaaaaaaaa' />
    </div>
    )
}

export default App
