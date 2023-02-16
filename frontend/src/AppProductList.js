import "./AppProductList.css";
//import './css/bootstrap.min.css';
import placeholder from "./images/Books_Silhouette.png";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
//import {Helmet} from 'react-helmet-async';

import logo from "./images/dalavintage-low-resolution-logo-color-on-transparent-background_2.png";
function AppProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:4000/getAllProducts");
      setProducts(result.data.data);
    };
    fetchData();
  }, []);

  //const getAllBooks =  () => {
  // fetch(url, settings)
  // .then(res=>{
  //  console.log(res);
  //  res.json();
  // })
  // .then(json=>setProducts(json));
  //};
  //getAllBooks();
  return (
    <Row className="App-productlist">
      <img src={logo} alt="Logo" className="App-logo" />
      {products.map((product) => (
        <Col sm={6} md={4} lg={3} className="mb-3 App-product">
          <a href={"/product/" + product.Id}>
            <img
              src={product.ImageUrl ? product.ImageUrl : placeholder}
              alt=""
              className="App-productimage"
            />
          </a>
          {/* <Col><ListGroup variant ="flush">
                <ListGroup.Item>
                  
                    <title>{product.Name}</title>
                  
                </ListGroup.Item>
                <ListGroup.Item>
                Author: {product.Author}
              </ListGroup.Item>
                <ListGroup.Item>
                 Price: {product.Price}kr
                </ListGroup.Item>
                <ListGroup.Item>
                 Description: <p>{product.Description}</p>
                </ListGroup.Item>
                </ListGroup>
        </Col> */}

          <h2>{product.Name}</h2>
          <p>{product.Author}</p>
          <p>{product.Price}kr</p>
          {/* <p className="app-productdescription">{product.Description}</p> */}
        </Col>
      ))}
    </Row>
  );
}

export default AppProductList;
