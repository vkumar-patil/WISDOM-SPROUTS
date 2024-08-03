import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

const ProductRating = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([]);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    const newReview = { rating, comment };
    setReviews([...reviews, newReview]);
    setRating(0);
    setComment("");
  };

  return (
    <Container className="mt-3 " style={{ width: "800px", marginLeft: "0px" }}>
      <Row style={{ margin: "0px" }}>
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Body>
              <Card.Title>Rate and Review</Card.Title>
              <div className="mb-3">
                {[...Array(5)].map((star, index) => {
                  const ratingValue = index + 1;
                  return (
                    <FaStar
                      key={index}
                      size={30}
                      color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
                      onClick={() => handleRatingChange(ratingValue)}
                      style={{ cursor: "pointer" }}
                    />
                  );
                })}
              </div>
              <Form.Group controlId="comment">
                <Form.Label>Comment</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={comment}
                  onChange={handleCommentChange}
                />
              </Form.Group>
              <Button variant="primary" className="mt-3" onClick={handleSubmit}>
                Submit
              </Button>
            </Card.Body>
          </Card>
          <Card className="mt-4">
            <Card.Body>
              <Card.Title>Reviews</Card.Title>
              {reviews.map((review, index) => (
                <div key={index} className="mb-3">
                  <div>
                    {[...Array(5)].map((star, i) => (
                      <FaStar
                        key={i}
                        size={20}
                        color={i < review.rating ? "#ffc107" : "#e4e5e9"}
                      />
                    ))}
                  </div>
                  <p>{review.comment}</p>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductRating;

// import React from "react";
// import { FaStar, FaStar, FaStarHalfalt } from "react-icons/fa";
// import { AiOutlineStar } from "react-icons/ai";
// import styled from "";
// const StarReviw = ({ star, reviw }) => {
//   const ratingstar = Array.from({ length: 5 }, (elem, index));
//   let number = index + 0.5;
//   return (
//     <span key={index}>
//       {star > index + 1 ? (
//         <FaStar className="icon" />
//       ) : star > number ? (
//         <FaStarHalfalt className="icon" />
//       ) : (
//         <AiOutlineStar className="icon" />
//       )}
//     </span>
//   );

//   return (
//     <wraper>
//       <di className="icon-style">
//         {ratingstar}
//         <p>ccoustomer Star Reviw</p>
//       </di>
//     </wraper>
//   );
// };

// export default StarReviw;
