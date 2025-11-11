import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Item from './Item'
import { useParams } from 'react-router-dom'

function ItemList ( { items } ) {
    const {cat} = useParams()
    
    return (
        <Container className='mt-4'>
            <h1 className='text-center mb-4'>
                {cat ? cat : 'All Products'}
            </h1>
            <Row>
                {items.map(item => <Item item={item} key={item.id} />)}
            </Row>
        </Container>
    )
}

export default ItemList