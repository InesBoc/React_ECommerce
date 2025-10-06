import { useState, useContext } from "react"
import { CartContext } from "../context/CartContext"
import Button from 'react-bootstrap/Button'

function Counter({item}) {
    const [count, setCount]= useState (0) 
    const {addToCart}= useContext(CartContext)

    
    const handleSub= () =>  setCount (count - 1)
    const handleAdd= () =>  setCount (count + 1) 

    const handleAddToCart= () =>{
        addToCart({...item, count})
    }

    return (
        <div>
            <p>{count}</p>
            <Button onClick={handleSub} style={{ backgroundColor: "#00322f", 
            borderColor: "#00322f", marginLeft: "8px" }} disabled= {count == 0}> 
                -
            </Button>
            <Button onClick={handleAdd} style={{ backgroundColor: "#00322f", borderColor: "#00322f" }}>
                +
            </Button>
            <Button onClick={handleAddToCart} 
            style={{backgroundColor: "#00322f", borderColor: "#00322f", 
                marginLeft: "8px",
                    fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif, monospace",
                    color: "rgb(234, 234, 181)", 
                    fontStyle: "italic",fontSize: "20px", }} > 
                Agregar al carrito
           </Button>
        </div>
    )
}
export default Counter