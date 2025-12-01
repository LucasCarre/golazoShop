import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer (){
    const [detailItem, setDetailItem] = useState([])
    const { id } = useParams()
    
    useEffect(()=>{
        fetch(`https://68abd0167a0bbe92cbb8534a.mockapi.io/products/${id}`)
        .then(res => res.json())
        .then(res => setDetailItem(res)
        );
    }, [id])
    return(
        <ItemDetail item={detailItem}/>
    )}


export default ItemDetailContainer;