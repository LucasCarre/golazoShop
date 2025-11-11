import { Button, Col, Container, Row } from 'react-bootstrap';

function ItemDetail ( {item} ){
    return(
        <Container>
            <Row>
                <h2>{item.title}</h2>
                <Col>
                <img src={item.thumbnail} />
                </Col>
                <Col>
                <p>{item.description}</p>
                <p>$ {item.price}</p>
                <Button variant='success'>Agregar al Carrito</Button>
                </Col>
            </Row>
        </Container>
        
    )
}

export default ItemDetail;