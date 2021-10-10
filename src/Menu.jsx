import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Data from './Data';
import { Modal } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import  Icon  from '@material-ui/core';
import { Navbar ,Container} from 'react-bootstrap';
const style = {
    height:"60px"
}
const Menu = () => {
    const [cart,setCart] = useState({});
    const [show, setShow] = useState(false);
   const history = useHistory();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    // let cartData = Object.values(cart);  
    // console.log(Object.values(cart)); 
    const addCart = (name,price)=>{
        if(cart[name]){
            let i = cart[name];
             i++;
            // console.log(i);
            setCart({...cart,[name]:i})
         }else{
            setCart({...cart,[name]:1})
         }
    } 
    const subCart = (name,price)=>{
        if(cart[name]){
            let i = cart[name];
             i--;
            setCart({...cart,[name]:i})
         }else{
             if(cart[name]!==0)
               setCart({...cart,[name]:1})
         }
    }
    const entries = Object.entries(cart);

    
    return (
        <>


<Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"> <i className="fas fa-utensils" style={{ marginRight: "15px" }}></i>
                        <label><b>Food's Resturant</b></label></Navbar.Brand>
                        
                    <form className="d-flex">
                    <span>
                    {((Object.keys(cart).length)>0) ? <i className="fas fa-shopping-cart" onClick={handleShow}></i> : null}
                    </span>
                 
                         <span className="badge bg-dark text-white ms-1 rounded-pill">{((Object.keys(cart).length)>0 ? Object.keys(cart).length : null )}</span>

                        </form>
                   
                </Container>
            </Navbar>


















                <div className="row ">
                    {
                        Data.map((currElement,index)=>{
                            const {name,price} = currElement;
                            return (
                                <div className="col-lg-3 offset-1 col-md-6 col-sm-12 my-3" key={index}>
                            <div className="card">
                  <img src={currElement.image} alt="random" className="card-img"/>
                                <div className="card-body">
                                    <h2 className="card-title">{name}</h2>
                                    <p className="card-text">Price: {price}</p>
                                   
                                   {(cart[name]>0) ? <p>Total : {cart[name]}</p> : null}
                                    
                                   
                                   {(cart[name]>0) ? <p>Cost (INR):{
                                        (cart[name]) ? cart[name]*price  : null
                                        } </p> : null}
                                    
                                    <Button variant="contained" color="primary" onClick={()=>{
                                                addCart(name,price);
                                    }}>
                                        <AddIcon/>
                                    </Button>
                                    <Button variant="contained" style={{marginLeft:"10px"}} onClick={()=>{
                                       subCart(name,price);
                                    }}>
                                        <RemoveIcon/>
                                    </Button>
                                </div>
                            </div>
                    </div>
                            )
                        })
                    }
                    

                </div>
         

         

            <Modal show={show} onHide={handleClose}>
                
                
               
                <Modal.Body>
                    <Modal.Title>Order Summary </Modal.Title>
                   {

(Object.keys(cart).length)>0? <div className="row ">
    
        
        {
            Data.map((currElement,index)=>{
                const {name,price} = currElement;
                return (
                    <div className="col-12" key={index}>
                <div className="card">
                    <img src={currElement.image} alt="random" className="card-img"/>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p className="card-text">Price: {price}</p>
                       
                       {(cart[name]>0) ? <p>Total : {cart[name]}</p> : null}
                        
                       
                       {(cart[name]>0) ? <p>Cost (INR):{
                            (cart[name]) ? cart[name]*price  : null
                            } </p> : null}
                        
                        <Button variant="contained" color="primary" onClick={()=>{
                                    addCart(name,price);
                        }}>
                            <AddIcon/>
                        </Button>
                        <Button variant="contained" style={{marginLeft:"10px"}} onClick={()=>{
                           subCart(name,price);
                        }}>
                            <RemoveIcon/>
                        </Button>
                    </div>
                </div>
        </div>
                )
            })
        }
        

    </div>
:null
    
    

                   

        }        </Modal.Body>
              
                <Modal.Footer>
                <Button variant="contained" className="offset-1" color="primary" onClick={()=>{
                        history.push("/checkout")
                }}>
                  Place Order
                </Button>&nbsp;&nbsp;
                <Button  variant="contained" className="offset-1" color="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default Menu;
