import { useParams } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useReducer,useState } from "react";
//import placeholder from "./images/Books_Silhouette.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import ListGroup from 'react-bootstrap/ListGroup';



function DetailScreen() {
  const { Id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:4000/getProductById/${Id}`);
      setProduct(response.data.data[0]);
    };
    fetchData();
  }, [Id]);
  return  (
    <div>
  {/*<Row> 
    <img
      src={product.ImageUrl ? product.ImageUrl : placeholder}
      alt="{product.Name}"
      className="App-productimage"
    />
  </Row>*/}
  <Row>
    <Col md={6}>
    <img
      src={product.ImageUrl}
      alt="{product.Name}"
      className="App-productimage"></img>
    </Col>
    <Col md={3}>
      <ListGroup variant="flush">
        <ListGroupItem><h1>{product.Name}</h1></ListGroupItem>
        <ListGroupItem>
          Price: {product.Price}kr
        </ListGroupItem>
        <ListGroupItem>
          Description: {product.Description}
        </ListGroupItem>
      </ListGroup>
    </Col>
    <Col></Col>
  </Row>
</div>
  );
}
export default DetailScreen;
