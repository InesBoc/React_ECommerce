
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import ItemCount from "./ItemCount"


function ItemDetail({item}) {
  return (
  <Container className="mt-4">
    <Row>
        <Col >
          <Image src= {item?.image} style={ {height:400} }/>
        </Col>

        <Col style={{
                    backgroundColor: "#00322f" ,
                    fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif, monospace",
                    color: "rgb(234, 234, 181)",
                    fontStyle: "italic",
                    fontSize: "20px",
                    fontWeight: "bold",
                    cursor: "pointer"
                  }}>
          <h2>{item?.name}</h2>
          <p>$ {item?.price}</p>
          <p>{item?.description}</p>
        
        </Col>
        <ItemCount item={item}/>
    </Row>
   </Container>
  )
}
export default ItemDetail