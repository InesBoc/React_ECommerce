import { useState } from "react"
import Button from 'react-bootstrap/Button'

function Counter() {
    const [count, setCount]= useState (0) 
    const handleAdd= () => { setCount (count + 1) }
    const handleSub= () => { if (count > 0) { setCount (count - 1) } }
    return (
        <div>
            <p>{count}</p>
            <Button onClick={handleAdd} style={{ backgroundColor: "#00322f", borderColor: "#00322f" }}>+</Button>
            <Button onClick={handleSub} style={{ backgroundColor: "#00322f", borderColor: "#00322f", marginLeft: "8px" }}>-</Button>
            <Button style={{ backgroundColor: "#00322f", borderColor: "#00322f", marginLeft: "8px" }}> Agregar al carrito</Button>
        </div>
    )
}
export default Counter;