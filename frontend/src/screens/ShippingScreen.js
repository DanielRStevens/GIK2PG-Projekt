import React from 'react'
import Form from 'react-bootstrap/Form';
import { useState} from "react";
import Button from 'react-bootstrap/Button';



export default function ShippingAddressScreen() {
    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');
    const submitHandler = (e) => {
        e.preventDefaut();
    }
  return (
    <div>
        <title>Shipping Address</title>
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
            <Form.Group className="my-3" controlId="country">
                <Form.Label>City</Form.Label>
                <Form.Control
              value={city}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
            </Form.Group>
            <div className="mb-3">
              <Button variant="primary" type="submit">Continue</Button>
            </div>
        </Form>
    </div>
  )
}
