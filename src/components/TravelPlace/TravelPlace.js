import React, { useEffect, useState } from "react";
import Place from "../Place/Place";

const TravelPlace = () => {
  const [TravelPlace, setTravelPlace] = useState([]);

  useEffect(() => {
    fetch("TravelPlace.json")
      .then((res) => res.json())
      .then((data) => setTravelPlace(data));
  }, []);
  return (
    <div className="container mt-16">
      <div
        className=" grid sm:grid-cols-1  lg:grid-cols-3  gap-0"
        style={{ color: "white", padding: "20px" }}
      >
        <div
          className="text-left"
          style={{ backgroundColor: "#3eb8d7", padding: "40px" }}
        >
          <p className="text-3xl">Specialist</p>
          <p>
            Health is not just the absence of a disease in the body. It is a
            state of a complete mental, physical, and social well-being. Read
            our list of Health Bytes here.
          </p>
        </div>
        <div className="text-left bg-blue-500" style={{ padding: "40px" }}>
          <p className="text-3xl">24 Hours Service</p>
          <p>
            Health is not just the absence of a disease in the body. It is a
            state of a complete mental, physical, and social well-being. Read
            our list of Health Bytes here.
          </p>
        </div>
        <div
          className="text-left"
          style={{ backgroundColor: "#3eb8d7", padding: "40px" }}
        >
          <p className="text-3xl">Available Time</p>
          <p>Monday-Tuesday: 2-8 PM</p>
          <hr />
          <p>Thursday: 5-10 PM</p>
          <hr />
          <p>Saturday-Sunday: 10-7 PM</p>
        </div>
      </div>
      <p className="text-3xl">Specialist TravelPlace</p>
      <div className="grid lg:grid-cols-4 mt-16 sm:grid-cols-1 gap-4">
        {TravelPlace.map((place) => (
          <Place key={place.id} place={place}></Place>
        ))}
      </div>
    </div>
  );
};

export default TravelPlace;
