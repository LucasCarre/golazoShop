import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router'

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
            <Button as={Link} to={`/item/${item.id}`} style={{backgroundColor: '#9d00ff', border: 'none',}}>ver mas
            </Button>
            </Card.Body>
        </Card>
        </Col>
    )
}

export default Item