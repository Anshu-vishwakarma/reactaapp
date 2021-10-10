import React from 'react'
import { Link } from 'react-router-dom'
import "./App.css"
import { Nav, Navbar, Container } from 'react-bootstrap'

function Header() {
    return (
        <>

            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"> <i className="fas fa-utensils" style={{ marginRight: "15px" }}></i>
                        <label><b>Food's Resturant</b></label></Navbar.Brand>
                    <Nav className="me-auto">

                    </Nav>
                </Container>
            </Navbar>

            <div style={{ marginTop: "25vh",justifyContent:"center",textAlign:"center" }}>
                <b>
                    <h2>Welcom to Food's</h2>
                    <h2>Kitchen</h2></b><br />
                <Link className="btn btn-outline-light btn-lg"
                    role="button"
                    to="/Menu" style={{ backgroundColor: "blue", color: "white", font: "bold", textDecoration: "none" }} >GO TO MENU</Link>
            </div>

        </>
    )
}

export default Header
