import CartWidget from "./CartWidget";
function NavBar () {
  return (
    <nav className="navbar">
      <h1>MAI Cosmetics</h1>
      <ul className="nav-links">
        <li><a href="#">Maquillaje</a></li>
        <li><a href="#">Accesorios</a></li>
        <li><a href="#">Promociones</a></li>
      </ul>
     < CartWidget/>
    </nav>
  );
}
export default NavBar;