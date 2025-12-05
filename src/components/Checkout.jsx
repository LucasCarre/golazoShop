import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function Checkout() {
    return (
        <div className='d-flex justify-content-center'>
            <Form className='mt-5 border p-3 rounded w-25'>
                <p className='fw-bold'>Para finalizar tu compra necesitamos tus datos 📦</p>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Pepito Perez" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Numero de celular</Form.Label>
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
