import React from "react";
import { NavLink } from "react-router-dom";
import img from "../../images/404.png";
const NotFound = () => {
  return (
    <div
      className="container"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div>
        <img
          style={{ marginBottom: "52px", marginTop: "50px", width: "368px" }}
          src={img}
          alt=""
        />
      </div>
      <div
        style={{ textAlign: "center", marginTop: "150px", marginLeft: "0px" }}
      >
        <h1 style={{ fontSize: "50px" }}>AWWW...DON’T CRY. </h1>
        <p style={{ fontSize: "20px" }}>
          <p> It's just a 404 Error! </p>
          What you’re looking for may have been misplaced in Long Term Memory.
        </p>
        <NavLink to="/home">Return to Home Page</NavLink>
      </div>
    </div>
  );
};

export default NotFound;
