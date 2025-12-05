import { useState } from "react";
import { CartContext } from "./CartContext";
import toast from "react-hot-toast";

function CartProvider ( { children } ){
    const [cart, setCart] = useState([])
    
    const getCartQuantity = () => cart.reduce((acum, current)=> acum + current.counter, 0)

    const addToCart = product => {
        const isInCart = cart.some(item => item.id == product.id)

        if (isInCart) {
            toast.error('El producto ya esta en el carrito')
            return
        } 

        setCart([ ...cart, product])
        toast.success('Producto agregado al carrito')
    }

    const cleanCart = () => setCart([])

    const deleteFromCart = product => {
        const itemDeleted = cart.filter(prod => prod.id != product.id)
        setCart(itemDeleted)
    }

    const getTotalPrice = () => cart.reduce((acum, current)=> acum + (current.counter*current.price), 0)

    return(
        <CartContext.Provider value={{getCartQuantity, addToCart, cart, cleanCart, getTotalPrice, deleteFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider