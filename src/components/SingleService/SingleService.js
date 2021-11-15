import React, { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { NavLink, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./SingleService.css";
import useAuth from "../Hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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
    fetch("http://localhost:5000/order", {
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
  const [bookingInfo, setBookingInfo] = useState("");
  const [serviceDetails, setServiceDetails] = useState({});

  //loading Data
  useEffect(() => {
    fetch(`http://localhost:5000/services/${id}`)
      .then((res) => res.json())
      .then((data) => setServiceDetails(data));
  }, []);
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    // e.preventDefault();
    newInfo[field] = value;
    console.log(newInfo);
    setBookingInfo(newInfo);
  };

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
              defaultValue={user.displayName}
              onBlur={handleOnBlur}
              {...register("name")}
            />

            <input
              defaultValue={user.email}
              onBlur={handleOnBlur}
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="error">This field is required</span>
            )}
            <input
              placeholder="Address"
              defaultValue=""
              onBlur={handleOnBlur}
              {...register("address")}
            />
            <input
              defaultValue={"Pending"}
              onBlur={handleOnBlur}
              {...register("status")}
            />
            <input
              defaultValue={serviceDetails.Name}
              onBlur={handleOnBlur}
              {...register("Cars_Name")}
            />
            <input
              placeholder="City"
              onBlur={handleOnBlur}
              defaultValue=""
              {...register("city")}
            />
            <input
              placeholder="phone number"
              defaultValue=""
              onBlur={handleOnBlur}
              {...register("phone")}
            />

            <input defaultValue={"Pending"} type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
