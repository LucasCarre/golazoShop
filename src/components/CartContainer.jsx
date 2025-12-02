import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { ListGroup, ListGroupItem } from "react-bootstrap"


function CartContainer(){
    const {cart} = useContext(CartContext)
    return(
        <div className="d-flex flex-column justify-content-center align-items-center ">
            <h3>CART</h3>
            <ListGroup>
                {cart.map(prod=> (
                    <ListGroupItem>{prod.equipo} --- cant: {prod.counter}</ListGroupItem>
                ))}
            </ListGroup>
            
        </div>
    )
}
export default CartContainer