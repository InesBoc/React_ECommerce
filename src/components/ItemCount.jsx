import { useState } from "react"
import Button from 'react-bootstrap/Button'

function Counter() {
    const [count, setCount]= useState (0) 
    const handleAdd= () => { setCount (count + 1) }
    const handleSub= () => { if (count > 0) { setCount (count - 1) } }
    return (
        <div>
            <p>{count}</p>
            <Button onClick={handleAdd} variant='success'>+</Button>
            <Button onClick={handleSub} variant= 'danger'>-</Button>
            <Button variant= 'primary'> Agregar al carrito</Button>
        </div>
    )
}
export default Counter;