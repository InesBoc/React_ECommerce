import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { serverTimestamp } from 'firebase/firestore'
import { createOrder } from '../firebase/db'

function Checkout() {
const {getTotal, cart}= useContext(CartContext)

  const handleSubmit= (e) => {
    e.preventDefault()
    const form= e.target
    
    const email= form.email.value
    const nombre= form.nombre.value
    const telefono= form.telefono.value
    
    const orden= {
        buyer: { email, nombre, telefono},
        total: getTotal(),
        items: cart,
        date: serverTimestamp()
        }
    createOrder(orden)
  }
  if (!cart.length) {
    return <div> No hay productos en el carrito </div>
  }
  return (
    <div className="d-flex flex-column mt-5 align-items-center justify-content-center ">
     <Form className='w-50' 
     style={{
           backgroundColor: "#00322f" ,
           fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif, monospace",
           color: "rgb(234, 234, 181)",
           fontStyle: "italic",
           fontSize: "20px",
           fontWeight: "bold",
           cursor: "pointer",
           padding: "20px"
           }}
           onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="nombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Nombre" required/>
      </Form.Group>

       <Form.Group className="mb-3" controlId="telefono">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control type="text" placeholder="Telefono" required/>
      </Form.Group>
     
      <Button variant="primary" type="submit"
      style={{backgroundColor: "#001412ff", 
              borderColor: "#cad3d3ff",   
              marginLeft: "8px",
              fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif, monospace",
              color: "rgb(234, 234, 181)", 
              fontStyle: "italic",
              fontSize: "20px", }}>
        Finalizar compra
      </Button>
    </Form>
    </div>
  )
}

export default Checkout