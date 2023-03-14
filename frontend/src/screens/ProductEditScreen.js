import { useNavigate, useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import placeholder from "../images/Books_Silhouette.png";
import "../css/DetailScreen.css";
import AdminCheck from "../components/adminCheck";
import { NoMatch } from "../App";

function ProductEditScreen() {
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

  if (!AdminCheck()) {
    return <NoMatch />;
  }

  return (
    <div className="detail-container">
      <Form>
        {
          // label for name
          <label for="book-name">Name: </label>
        }
        {
          // entry form for product.Name
          <input type="text" id="book-name" name="book-name" placeholder={product.Name}></input>
        }
        {
          //label for Author
          <label for="book-author">Author:</label>
        }
        {
          // entry form for product.Author
          <input
            type="text"
            id="book-author"
            name="book-author"
            placeholder={product.Author}
          ></input>
        }
        {
          // label for price
          <label for="book-price">Price:</label>
        }
        {
          // form for product.price
          <input
            type="number"
            id="book-price"
            name="book-price"
            placeholder={product.Price}
          ></input>
        }
        {
          // label for description
          <label for="description">Description:</label>
        }
        {
          // entry form for product.description
          <textarea id="description" name="description" placeholder={product.Description}></textarea>
        }
        {
          //edit number product.CountinStock?
          <label for="product-countinstock" >In stock: </label>
        }
        {
          <input
            type="number"
            id="product-CountinStock"
            name="product-CountinStock"
            placeholder={product.countInStock}
          ></input>
        }
        {
          //edit category
        }
        {
          //submission button sending a PUT to "localhost:4000/product/"+product.Id
        }
      </Form>
    </div>
  );
}

export default ProductEditScreen;
