import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return <Spinner animation="border" variant="danger" />;
  }
  return (
    <div className="container">
      <p className=" mt-16 text-4xl text-gray-600 font-bold">
        What Our Customers Say
      </p>
      <div className="grid lg:grid-cols-3 mt-16 sm:grid-cols-1 gap-4">
        {reviews.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
