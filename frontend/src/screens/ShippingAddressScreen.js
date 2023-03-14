import React from 'react'
import Form from 'react-bootstrap/Form';
import { useState, useContext , useEffect}  from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../StoreContext";



export default function ShippingAddressScreen() {
    const navigate = useNavigate();
    const { state, dispatch: ctxDispatch } = useContext(StoreContext);
    const{ userInfo, cart:{shippingAddress}, }= state;
    const [fullName, setFullName] = useState(shippingAddress.fullName || '');
    const [address, setAddress] = useState(shippingAddress.address || '');
    const [city, setCity] = useState(shippingAddress.city || '');
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode || '');
    const [country, setCountry] = useState(shippingAddress.country || '');

   /* useEffect(() => { 
      if(!userInfo) {
        navigate('/shipping');
      } 
    }, [userInfo]);*/
  
    
    //const submitHandler = (e) => {
       // e.preventDefaut();
   // }
    ctxDispatch({
      type: "SAVE_SHIPPING_ADDRESS",
      payload: { fullName,address,city,postalCode,country},
    });
    localStorage.setItem('shippingAddress', JSON.stringify({fullName,address,city,postalCode,country})
    );
   
     // navigate('/payment');
    
  return (
    <div>
        <title>Shipping Address</title>
        <div className='container small-container'>
          <h1 className="my-3">Shipping Address</h1>
        <Form>
            <Form.Group className="my-3" controlId="fullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            </Form.Group>
            <Form.Group className="my-3" controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            </Form.Group>
            <Form.Group className="my-3" controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
            </Form.Group>
            <Form.Group className="my-3" controlId="postalcode">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              required
            />
            </Form.Group>
            <Form.Group className="my-3" controlId="country">
                <Form.Label>Country</Form.Label>
                <Form.Control
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
            </Form.Group>
            <div className="mb-3">
              <Button variant="primary" type="submit">Continue</Button>
            </div>
        </Form></div>
    </div>
  )
}
