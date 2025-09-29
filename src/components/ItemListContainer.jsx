import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router"
import { getItems, getItemsByCategory } from "../firebase/db"



function ItemListContainer({text}) {
  const [items, setItems] = useState([])
  const {id}= useParams()


  useEffect(() => {
    if (id) { 
      getItemsByCategory(id)
      .then (data => setItems (data) )
    } else {
      getItems()
      .then (data =>setItems (data))
    }
 
  }, [id])
 
  return (
      <ItemList items={items} />
     )
}
export default ItemListContainer


