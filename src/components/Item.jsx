import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

function Item ( { item } ) {
    return (
        <Col lg={4}>
        <Card className='mb-4'>
            <Card.Img variant="top" src={item.thumbnail} />
            <Card.Body>
            <Card.Title>{item.nombre}</Card.Title>
            <Card.Text>
                {item.description}
            </Card.Text>
            <Button variant="primary">ver mas</Button>
            </Card.Body>
        </Card>
        </Col>
    )
}

export default Item