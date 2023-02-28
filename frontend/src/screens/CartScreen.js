import { useContext } from "react";
import { StoreContext } from "../StoreContext";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Helmet } from "react-helmet";
import placeholder from "../images/Books_Silhouette.png";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function CartScreen() {
  const { state, dispatch: ctxDispatch } = useContext(StoreContext);
  const {
    cart: { cartItems },
  } = state;

  const updateCartHandler = async (product, quantity) => {
    const { data } = await axios.get(`http://localhost:4000/product/:id`);
    if (data.countInStock < quantity) {
      window.alert("Product is out of stock");
      return;
    }
    ctxDispatch({
      type: "ADD_ITEM",
      payload: { ...product, quantity },
    });
  };
  const removeItemHandler = (product) => {
    ctxDispatch({ type: "REMOVE_ITEM", payload: product });
  };

  return (
    <div>
      <Helmet>
        <title>Shopping Cart</title>
      </Helmet>
      <h1>Shopping Cart</h1>
      <Row>
        <Col md={8}>
          {cartItems.length === 0 ? (
            <div>
              The Cart is empty. <Link to="/">Go Shopping</Link>
            </div>
          ) : (
            <ListGroup>
              {cartItems.map((product) => (
                <ListGroup.Item key={product._id}>
                  <Row className="align-items-center">
                    <Col md={2}>
                      <img
                        src={product.ImageUrl ? product.ImageUrl : placeholder}
                        alt={product.Name}
                        className="img-fluid rounded img-thumbnail "
                      ></img>{" "}
                      <p>
                        <strong>
                          {product._id}
                          {product.Name}
                        </strong>
                      </p>
                    </Col>
                    <Col md={3}>
                      <Button
                        onClick={() =>
                          updateCartHandler(product, product.quantity - 1)
                        }
                        variant="light"
                        disabled={product.quantity === 1}
                      >
                        <i className="fas fa-minus-circle"> </i>
                      </Button>{" "}
                      <span>{product.quantity}</span>{" "}
                      <Button
                        variant="light"
                        onClick={() =>
                          updateCartHandler(product, product.quantity + 1)
                        }
                        disabled={product.quantity === product.countInStock}
                      >
                        <i className="fas fa-plus-circle"> </i>
                      </Button>
                    </Col>
                    <Col md={3}>{product.Price}kr </Col>
                    <Col md={2}>
                      <Button
                        onClick={() => removeItemHandler(product)}
                        variant="light"
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>
                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{" "}
                    products) :
                    {cartItems.reduce((a, c) => a + c.Price * c.quantity, 0)}
                    kr
                  </h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="d-grid">
                    <Button
                      type="button"
                      variant="primary"
                      disabled={cartItems.length === 0}
                    >
                      Proceed to Checkout
                    </Button>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
