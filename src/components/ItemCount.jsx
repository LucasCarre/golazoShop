import { useContext, useState } from "react"
import { Button } from "react-bootstrap"
import { CartContext } from "../context/CartContext"

function ItemCount ({ item }){
    const [counter, setCounter] = useState(1)
    const { addToCart } = useContext(CartContext)
    const handelAdd = ()=>{
        setCounter(counter + 1)
    }
    const handleMinus = ()=>{
        if (counter === 0) return
        setCounter(counter - 1)
    }
    const hanldeAddToCart = () => addToCart({ ...item, counter})
    return (
        <div>
            <p>{counter}</p>
            <div className="d-flex gap-1">
            <Button onClick={handleMinus} variant="danger">-</Button>
            <Button onClick={handelAdd} variant="success">+</Button>
            <Button disabled={counter === 0} onClick={hanldeAddToCart}> 
                Agregar al carrito
            </Button>
            </div>
        </div>
    )
}

export default ItemCount