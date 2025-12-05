import { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { CartContext } from '../context/CartContext'
import { createOrder } from './firebase/db'
import { serverTimestamp } from 'firebase/firestore'


function Checkout() {
    const {getTotalPrice, cart} = useContext(CartContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target
        const email = form.email.value
        const name = form.name.value
        const phone = form.phone.value
        const order = {
            comprador: {email, name, phone},
            total: getTotalPrice(),
            productos: cart,
            fecha: serverTimestamp()
        }

        createOrder(order)
    }
    
    return (
        <div className='d-flex justify-content-center'>
            <Form className='mt-5 border p-3 rounded w-25' onSubmit={handleSubmit}>
                <p className='fw-bold'>Para finalizar tu compra necesitamos los siguientes datos 📦</p>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Nombre Completo</Form.Label>
                    <Form.Control type="text" placeholder="Pepito Perez" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Telefono de contacto</Form.Label>
                    <Form.Control type="text" placeholder="1123434565" required />
                </Form.Group>

                <Button variant="dark" type="submit" className='w-100'>
                    Finalizar compra 💸
                </Button>
            </Form>
        </div>
    )
}

export default Checkout
