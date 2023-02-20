import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ReviewScreen() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `http://localhost:4000/getAllReviewsByProductId/${id}`
      );
      setReviews(result.data.data);
    };
    fetchData();
  }, []);

  return (
    <Row className="App-reviewlist">
      {reviews.map((review) => (
        <Col sm={6} md={4} lg={3} className="mb-3 App-review">
          <p>User {review.userId}</p>
          <p>Rating: {review.rating}</p>
          <p>{review.reviewText}</p>
        </Col>
      ))}
    </Row>
  );
}
export default ReviewScreen;
