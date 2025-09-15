
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import ItemCount from "./ItemCount"


function ItemDetail({item}) {
  return (
    <Container className="mt-4">
    <Row>
        <Col>
        <Image src= {item?.thumbnail}/>
        </Col>

        <Col>
        <h2>{item?.title}</h2>
        <p>$ {item?.price}</p>
        <p>{item?.description}</p>
        </Col>
        <ItemCount/>
    </Row>
   </Container>
  )
}
export default ItemDetail