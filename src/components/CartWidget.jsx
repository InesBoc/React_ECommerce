

function CartWidget() {
  return (
    <div className="cart-widget">
      <span className="cart-icon" role="img" aria-label="Carrito de compras" 
      style= {{fontSize: "30px"}}
      >🛒</span>
      <span className="cart-bubble" 
      style= {{
  position: "absolute",
  backgroundColor: "red",
  color: "white",
  fontSize: "12px",
  fontWeight: "bold",
  borderRadius: "50%",
  padding: "2px 6px",
}}
>3</span>
    </div>
    
  );
}
export default CartWidget;