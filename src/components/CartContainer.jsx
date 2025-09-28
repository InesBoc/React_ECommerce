import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

function CartContainer(params) {
    const {cart, getTotal}= useContext(CartContext)
    const total= getTotal()

    return (
        <div className="d-flex flex-column mt-5 align-items-center justify-content-center">
            <ListGroup className="w-50">
   
                {cart.map(item =>
                    (<ListGroup.Item key={item.id}>
                       {item.count} x {item.title} 
                    </ListGroup.Item>)
                )}
            
            </ListGroup>
            <h2 className="w-50 mt-2 bg-white"> $ {total} </h2>
            <Button className="w-50 mt-3" style={{ backgroundColor: "#00322f", borderColor: "#00322f", fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif, monospace", color: "rgb(234, 234, 181)", fontStyle: "italic",fontSize: "20px", }}> 
                Comprar
            </Button>
        </div>
    )
}
export default CartContainer