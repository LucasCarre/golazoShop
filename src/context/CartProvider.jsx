import { useState } from "react";
import { CartContext } from "./CartContext";

function CartProvider ( { children } ){
    const [cart, setCart] = useState([])
    
    const getCartQuantity = () => cart.reduce((acum, current)=> acum + current.counter, 0)

    const addToCart = product => setCart([ ...cart, product])

    const cleanCart = () => setCart([])

    return(
        <CartContext.Provider value={{getCartQuantity, addToCart, cart, cleanCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider