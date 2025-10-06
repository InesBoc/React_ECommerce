import { CartContext } from "./CartContext"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import toast from 'react-hot-toast'


function CartProvider({children}) {
    const [cart, setCart]= useState([])
    const navigate = useNavigate()

    const addToCart= item => {
        const isInCart = cart.some((prod) => prod.id === item.id);

    if (isInCart) {
      toast("⚠️ El producto ya fue agregado al carrito")
      return
    }

    setCart([...cart, item]);
    toast.success("🛒 Producto agregado al carrito")
    navigate("/")
    }
    const deleteItem= (id) => {
        const updatedCart= cart.filter (item => item.id !== id)
        setCart (updatedCart)
    }
    const getQuantity= () =>{
        const quantities= cart.map(item => item.count)
        const total= quantities.reduce( (acc, current) => acc + current, 0)
        return total
    }

     const getTotal= () =>{
        const precios= cart.map(item => item.count*item.price)
        const total= precios.reduce( (acc, current) => acc + current, 0)
        return total
    }
    const clearCart= () => setCart ([])
    const value= {
        cart, 
        addToCart, 
        deleteItem, 
        getQuantity, 
        getTotal, 
        clearCart
    }
    
    return (
    <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
)
}


export default CartProvider