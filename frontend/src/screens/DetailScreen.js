import { useParams } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useReducer,useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';




function DetailScreen() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:4000/getProductById/${id}`);
      setProduct(response.data.data[0]);
      
    };
    fetchData();
  }, [id]);

 
  return  (
    <div>
  {/*<Row> 
    <img
      src={product.ImageUrl ? product.ImageUrl : placeholder}
      alt="{product.Name}"
      className="App-productimage"
    />
  </Row>*/}
  <Row className="align-items-center"> 
    <Col md={6}>
    <img
      src={product.ImageUrl}
      alt="{product.Name}"
      className="App-productimage"></img>
    </Col>
    <Col md={3}>
      <ListGroup variant="flush">
        <ListGroupItem><h1>{product.Name}</h1></ListGroupItem>
          <ListGroupItem><h2>{product.Author}</h2></ListGroupItem>
        <ListGroupItem>
          Price: {product.Price}kr
        </ListGroupItem>
        <ListGroupItem>
          Description: {product.Description}
        </ListGroupItem>
      </ListGroup>
    </Col>
    <Col md={3}>
      <Card>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroupItem>
              <Row>
                <Col>Status:</Col>
                <Col>{product.countInStock > 0 ? (
                        <Badge bg="success">In Stock</Badge>
                      ) : (
                        <Badge bg="danger">Unavailable</Badge>
                      )}</Col>
              </Row>
            </ListGroupItem>

                    <div className="d-grid">
                      <Button variant="primary">
                        Add to Cart
                      </Button>
                      </div>
          </ListGroup>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</div>
  );
}
export default DetailScreen;
