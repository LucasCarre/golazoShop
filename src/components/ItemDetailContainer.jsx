import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import { getSingleProduct } from "./firebase/db";

function ItemDetailContainer (){
    const [detailItem, setDetailItem] = useState([])
    const { id } = useParams()
    
    useEffect(()=>{
        getSingleProduct(id, setDetailItem)
    }, [id])
    return(
        <ItemDetail item={detailItem}/>
    )}


export default ItemDetailContainer;