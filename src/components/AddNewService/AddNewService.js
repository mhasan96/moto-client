import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddNewService.css";

const AddNewService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/services", data).then((res) => {
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

export default AddNewService;
