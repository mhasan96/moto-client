import React, { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { NavLink, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./SingleService.css";
import useAuth from "../Hooks/useAuth";

const SingleService = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Order processed Successfully");

          reset();
        }
      });
  };
  let { id } = useParams();

  const [serviceDetails, setServiceDetails] = useState({});

  //loading Data
  useEffect(() => {
    fetch(`http://localhost:5000/services/${id}`)
      .then((res) => res.json())
      .then((data) => setServiceDetails(data));
  }, []);

  return (
    <div>
      <p className="text-4xl mt-24"> {serviceDetails?.Name} Booking</p>
      <div className="container mt-24 grid grid-cols-2 ">
        <div className="grid lg:grid-cols-6 sm:grid-cols-1 mt-16 text-center  justify-center">
          <CardGroup className="col-start-2 col-span-4">
            <Card>
              <Card.Img variant="top" src={serviceDetails?.img} />
              <Card.Body>
                <Card.Title className="text-left font-bold font-xl text-blue-500">
                  {serviceDetails?.Name}
                </Card.Title>
                <hr />
                <Card.Text className="text-left ">
                  {serviceDetails?.Description}
                </Card.Text>
                <hr />

                <Card.Text className="text-left ">
                  Cost: ${serviceDetails?.Price}
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
        <div className="add-service mt-16 ">
          <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
            <input
              defaultValue={serviceDetails._id}
              {...register("id")}
              disabled
            />
            <input defaultValue={user.displayName} {...register("name")} />

            <input
              defaultValue={user.email}
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="error">This field is required</span>
            )}
            <input
              placeholder="Address"
              defaultValue=""
              {...register("address")}
            />
            <input placeholder="City" defaultValue="" {...register("city")} />
            <input
              placeholder="phone number"
              defaultValue=""
              {...register("phone")}
            />

            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
