import React from "react";

import img from "../../../images/1.jpg";
const Laboratory = () => {
  return (
    <div className="container mt-5  mb-64" style={{ paddingTop: "50px" }}>
      <p className="mt-5 text-3xl ">BMW is Happiness</p>
      <p className="m-12 text-4xl"></p>
      <div className="">
        <div className="mt-20">
          <p className="text-3xl text-center"></p>
          <p>
            Bayerische Motoren Werke AG, commonly known as Bavarian Motor Works,
            BMW or BMW AG, is a German automobile, motorcycle and engine
            manufacturing company founded in 1916. ... It also owns and produces
            Mini cars, and is the parent company of Rolls-Royce Motor Cars. BMW
            produces motorcycles under BMW Motorrad.
          </p>
        </div>
        <div className="flex justify-center items-center ml-20px">
          <img style={{ width: "70%" }} src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Laboratory;
