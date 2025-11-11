import { Button, Col, Container, Row } from 'react-bootstrap';

function ItemDetail ( {item} ){
    return(
        <Container className="mt-5">
            <Row className="align-items-center">
                    <h2 className="text-center mb-4">{item.title}</h2>
                <Col md={6} className="text-center">
                    <img src={item.thumbnail}/>
                </Col>
                <Col md={6}>
                    <p>{item.description}</p>
                    <p>$ {item.price}</p>
                    <Button variant='success'>Agregar al Carrito</Button>
                </Col>
            </Row>
        </Container>
        
    )
}

export default ItemDetail;