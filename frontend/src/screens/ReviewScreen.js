import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Rating from "../components/rating";
import Container from "react-bootstrap/esm/Container";

function ReviewScreen() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `http://localhost:4000/review/product/${id}`
      );
      setReviews(result.data.data);
    };
    fetchData();

    const fetchUser = async () => {
      for (let index = 0; index < reviews.length; index++) {
        const result = await axios.get(`http://localhost:4000/user/${reviews[index].userId}`);
        setReviews({...reviews, ["username"]: result.data.data[0].username});
      }

      console.log(reviews)
    };
    fetchUser();
  }, []);

  /*   var rating = 0;
  var numReviews = 0;
  reviews.forEach((review) => {
    rating += review.rating;
    numReviews++;
  });
  rating = rating / numReviews;
 */
  return (
    <Container className="App-reviewcontainer">
      <Row>
        <h2>Reviews</h2>
      </Row>
      <Row className="App-reviewlist">
        {reviews.map((review) => (
          <Col sm={6} md={4} lg={3} className="mb-3 App-review">
            <p>{review.username}</p>
            <Rating rating={review.rating}></Rating>
            <p>{review.reviewText}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default ReviewScreen;
