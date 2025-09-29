
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import CartWidget from "./CartWidget"
import NavDropdown from 'react-bootstrap/NavDropdown'
import { NavLink, Link } from 'react-router-dom'


function NavBar ({categories}) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/"style={{
            fontFamily: "Shrikhand, serif",
            fontWeight: 400,
            fontStyle: "normal",
            textAlign: "center",
            textShadow: "#fceff6 0px 0px 10px",
            color: "#ed6bae",
            fontSize: "4rem",
            margin: "0 0 0 30px"
          }}>
          MAI Cosmetics
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title={
              <span style={{
                          fontFamily: "Shrikhand, serif",
                          fontWeight: 400,
                          fontStyle: "normal",
                          textAlign: "center", 
                          color: "#b2246dff", 
                          fontSize: "2rem", 
                          margin: "0 0 0 30px"
                          }}>
               Categorías
              </span>
              }>
            
            {categories.map( (category  => (
                <NavDropdown.Item 
                  as={NavLink} 
                  to={`/category/${category.categoryName}`} 
                  key={category.id}
                  style={{
                    backgroundColor: "#00322f" ,
                    fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif, monospace",
                    color: "rgb(234, 234, 181)",
                    fontStyle: "italic",
                    fontSize: "20px",
                    fontWeight: "bold",
                    cursor: "pointer"
                  }}>
                  {category.categoryName}
                </NavDropdown.Item>
                )))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      <CartWidget/>
      </Container>  
    </Navbar>
  )
}

export default NavBar 