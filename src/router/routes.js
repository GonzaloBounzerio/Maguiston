import CartContainer from "../components/pages/cart/CartContainer"
import CheckOutContainer from "../components/pages/checkOut/CheckOutContainer"
import HomeContainer from "../components/pages/home/HomeContainer"
import ItemDetailContainer from "../components/pages/itemDetailContainer/ItemDetailCOntainer"
import ItemListContainer from "../components/pages/itemListContainer/ItemListContainer"

export const routes = [
    {
        id: "home",
        path:"/",
        Element: HomeContainer
    },
    {
        id: "cart",
        path:"/cart",
        Element: CartContainer
    },
    {
        id: "detailItem",
        path:"/item/:id",
        Element: ItemDetailContainer
    },
    {
        id: "albumesFull",
        path:"/albumes",
        Element: ItemListContainer
    },
    {
        id: "albumesAutor",
        path:"/albumes/:autorID",
        Element: ItemListContainer
    },
    {
        id: "checkout",
        path:"/checkout",
        Element: CheckOutContainer
    }
]
