import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./AddNewProducts.css";

const AddNewProducts = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://dry-thicket-62738.herokuapp.com/services", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("New Services Added Successfully");
          reset();
        }
      });
  };
  return (
    <div className="add-service">
      <h2 className="mt-16">Add a New Service</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("Name", { required: true, maxLength: 20 })}
          placeholder="name"
        />
        <textarea {...register("Description")} placeholder="Description" />
        <input type="number" {...register("Price")} placeholder="price" />
        <input {...register("img")} placeholder="url Link" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddNewProducts;
