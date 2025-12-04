import { useContext, useState } from "react"
import { useEffect } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router";
import { CartContext } from "../context/CartContext";
import { getProducts, getProductsByCategory } from "./firebase/db";

function ItemListConteiner(){
    const [items, setItems] = useState([]);
    const {cat} = useParams()
    const context = useContext(CartContext)

    console.log(context)

    useEffect(() => {
        cat ? getProductsByCategory(cat, setItems) : getProducts(setItems)
    }, [cat])
    
    return(
        <ItemList items={items} />
        
    )
}

export default ItemListConteiner 