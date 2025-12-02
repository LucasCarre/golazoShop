import { useState } from "react";
import { CartContext } from "./CartContext";

function CartProvider ( { children } ){
    const [cart, setCart] = useState([])
    
    const getCartQuantity = () => cart.reduce((acum, current)=> acum + current.counter, 0)

    const addToCart = product => setCart([ ...cart, product])

    return(
        <CartContext.Provider value={{getCartQuantity, addToCart, cart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider