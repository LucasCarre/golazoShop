import { useState } from "react"
import { useEffect } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router";

function ItemListConteiner(){
    const [items, setItems] = useState([]);
    const {cat} = useParams()

    useEffect(() => {
        if (cat){
            fetch(`https://dummyjson.com/products/category/${cat}`)
                .then(res => res.json())
                .then(data => setItems(data.products));
        } else {
            fetch('https://dummyjson.com/products')
                .then(res => res.json())
                .then(data => setItems(data.products))
        }
        
        }, [cat])
    
    return(
        <ItemList items={items} />
        
    )
}

export default ItemListConteiner 