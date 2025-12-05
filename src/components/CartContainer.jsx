import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Button, ListGroup, ListGroupItem } from "react-bootstrap"
import EmptyCart from "./EmptyCart"
import Image from 'react-bootstrap/Image';
import { useNavigate } from "react-router";

function CartContainer(){
    const {cart, cleanCart} = useContext(CartContext)
    const navigate = useNavigate()
    
    if (cart.length < 1){
        return(
            <EmptyCart/>
        )
    }
    
    return(
        <div className="d-flex flex-column justify-content-center align-items-center ">
            <h3>CART</h3>
            <ListGroup>
                {cart.map(prod=> (
                    <ListGroupItem key={prod.id} className="d-flex justify-content-between align-items-center gap-4">
                        <Image src={prod.img} width={150}/>
                        {prod.equipo} - cant: {prod.counter}
                        <Button variant="danger">Eliminar</Button>
                    </ListGroupItem>
                ))}
            </ListGroup>
            <Button className="mt-5 w-50" variant="danger" onClick={()=>cleanCart()}>Vaciar Carrito</Button>
            <Button className="mt-3 w-50" variant="success" onClick={()=>navigate('/checkout')}>Finalizar Compra</Button>
            
        </div>
    )
}
export default CartContainer