import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer (){
    const [detailItem, setDetailItem] = useState([])
    const { id } = useParams()
    
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(res => setDetailItem(res)
        );
    }, [id])
    return(
        <ItemDetail item={detailItem}/>
    )}


export default ItemDetailContainer;