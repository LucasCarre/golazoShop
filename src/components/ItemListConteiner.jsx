import { useState } from "react"
import { useEffect } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router";

function ItemListConteiner(){
    const [items, setItems] = useState([]);
    const {cat} = useParams()

    useEffect(() => {
        fetch('https://68abd0167a0bbe92cbb8534a.mockapi.io/products')
            .then(res => res.json())
            .then(data => {
                if (cat) {
                    const filtrados = data.filter(item => item.categoryId == cat);
                    setItems(filtrados);
                } else {
                    setItems(data);
                }
            });

    }, [cat])
    
    return(
        <ItemList items={items} />
        
    )
}

export default ItemListConteiner 