import { useState, useEffect, useContext } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router"
import { CartContext } from "../context/CartContext"


function ItemListContainer({text}) {
  const [items, setItems] = useState([])
  const {id}= useParams()
  const context= useContext(CartContext)

  useEffect(() => {
    console.log(context)
    const url= 'https://dummyjson.com/products'
    const urlCategory= `https://dummyjson.com/products/category/${id}`
    fetch(id ? urlCategory : url)
    .then(res => res.json())
    .then(data => setItems (data.products) )

  }, [id])
 
  return (
      <ItemList items={items} />
     )
}
export default ItemListContainer