import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { StoreContext } from "../StoreContext";
import placeholder from "../images/Books_Silhouette.png";
import "../css/DetailScreen.css";
import ReviewScreen from "./ReviewScreen";
import Rating from "../components/rating";
import AdminCheck from "../components/adminCheck";

function DetailScreen() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:4000/product/${id}`);
      setProduct(response.data.data[0]);
    };
    fetchData();
  }, [id]);

  //Review handling
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get( `http://localhost:4000/review/product/${id}`);
      setReviews(result.data.data);
    };
    fetchData();
  }, []);
  var rating = 0;
  var numReviews = 0;
  reviews.forEach((review) => {
    rating += review.rating;
    numReviews++;
  });
  rating = rating / numReviews;

  const { state, dispatch: ctxDispatch } = useContext(StoreContext);
  const { cart } = state;
  const HandlerAddToCart = async () => {
    const existItem = cart.cartItems.find((x) => x.Id === product.Id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`http://localhost:4000/product/${id}`);
    if (data.data[0].countInStock < quantity) {
      window.alert("The product is currently out of stock!");
      return;
    }
    ctxDispatch({
      type: "ADD_ITEM",
      payload: { ...product, quantity },
    });
    navigate("/cart");
  };
  return (
    <div className="detail-container">
      <Row>
        <Col md={6}>
          <img
            src={product.ImageUrl ? product.ImageUrl : placeholder}
            alt="{product.Name}"
            className="App-productimage"
          />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h1>{product.Name}</h1>
            </ListGroupItem>
            <ListGroupItem>
              <Rating rating={rating} numReviews={numReviews}></Rating>
            </ListGroupItem>
            <ListGroupItem>Author: {product.Author}</ListGroupItem>
            <ListGroupItem>Price: {product.Price}kr</ListGroupItem>
            <ListGroupItem>Description: {product.Description}</ListGroupItem>
            {AdminCheck()?<ListGroupItem><a href={"/product/"+product.Id+"/edit"}>Edit product</a></ListGroupItem>:""}
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroupItem>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {" "}
                      {product.countInStock > 0 ? (
                        <Badge bg="success">In stock</Badge>
                      ) : (
                        <Badge bg="danger">Unavailable</Badge>
                      )}
                    </Col>
                  </Row>
                </ListGroupItem>
                {product.countInStock > 0 && (
                  <ListGroupItem>
                    <div className="d-grid">
                      <Button onClick={HandlerAddToCart} variant="primary">
                        {" "}
                        Add to Cart
                      </Button>
                    </div>
                  </ListGroupItem>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <ReviewScreen></ReviewScreen>
        <ListGroup></ListGroup>
      </Row>
    </div>
  );
}

export default DetailScreen;