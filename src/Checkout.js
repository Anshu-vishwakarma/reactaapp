import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
function Checkout() {
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




        <div className="containar"  style={{position:"relative"}}>
            <div className="row" style={{justifyContent:"center",alignItems:"center", marginTop:"35vh"}}>
                <div className="col-10" style={{backgroundColor:"#DFE6E3" ,height:"100px",textAlign:"center"}}>
                      <h2 >Checkout</h2>
                      <p style={{ textAlign:"left"}}>Thank you for order</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Checkout
