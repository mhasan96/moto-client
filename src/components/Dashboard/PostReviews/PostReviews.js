import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./PostReviews.css";

const PostReviews = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/reviews", data).then((res) => {
      if (res.data.insertedId) {
        alert("Thank You for your Feedback");
        reset();
      }
    });
  };
  return (
    <div className="add-service">
      <h2 className="mt-16">Give Feedback</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("Name", { required: true, maxLength: 20 })}
          placeholder="Name"
        />
        <textarea {...register("Description")} placeholder="Feedback" />
        <input
          type="number"
          {...register("ratings")}
          placeholder="Ratings 1-5"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default PostReviews;
