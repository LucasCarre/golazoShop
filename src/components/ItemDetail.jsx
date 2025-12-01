import { Button, Col, Container, Row } from 'react-bootstrap';

function ItemDetail ( {item} ){
    return(
        <Container className="mt-5">
            <Row className="align-items-center">
                    <h2 className="text-center mb-4">{item.equipo}</h2>
                <Col md={6} className="text-center">
                    <img src={item.img} className="img-fluid" style={{ maxWidth: "400px" }}/>
                </Col>
                <Col md={6}>
                    <p>{item.decripcion}</p>
                    <p>$ {item.precio}</p>
                    <Button variant='success'>Agregar al Carrito</Button>
                </Col>
            </Row>
        </Container>
        
    )
}

export default ItemDetail;