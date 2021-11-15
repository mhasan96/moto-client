import React from "react";
import img from "../../../images/1.jpg";

const Features = () => {
  return (
    <div id="home" className="container">
      <h1 className="text-4xl">Why Choose US?</h1>
      <div
        className=" grid sm:grid-cols-1  lg:grid-cols-3  gap-0"
        style={{ color: "white", padding: "20px" }}
      >
        <div
          className="text-left"
          style={{ backgroundColor: "#3eb8d7", padding: "40px" }}
        >
          <p className="text-3xl">Best Services</p>
          <p>
            Bayerische Motoren Werke AG, commonly known as Bavarian Motor Works,
            BMW or BMW AG, is a German automobile, motorcycle and engine
            manufacturing company founded in 1916. ... It also owns and produces
            Mini cars, and is the parent company of Rolls-Royce Motor Cars. BMW
            produces motorcycles under BMW Motorrad.
          </p>
        </div>
        <div className="text-left bg-blue-500" style={{ padding: "40px" }}>
          <p className="text-3xl">World Class Cars</p>
          <p>
            Bayerische Motoren Werke AG, commonly known as Bavarian Motor Works,
            BMW or BMW AG, is a German automobile, motorcycle and engine
            manufacturing company founded in 1916. ... It also owns and produces
            Mini cars, and is the parent company of Rolls-Royce Motor Cars. BMW
            produces motorcycles under BMW Motorrad.
          </p>
        </div>
        <div
          className="text-left"
          style={{ backgroundColor: "#3eb8d7", padding: "40px" }}
        >
          <p className="text-3xl"> Installment Services</p>
          <p>
            Bayerische Motoren Werke AG, commonly known as Bavarian Motor Works,
            BMW or BMW AG, is a German automobile, motorcycle and engine
            manufacturing company founded in 1916. ... It also owns and produces
            Mini cars, and is the parent company of Rolls-Royce Motor Cars. BMW
            produces motorcycles under BMW Motorrad.
          </p>
        </div>
      </div>
      <p className="m-12 text-4xl">BMW is Happiness</p>
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

export default Features;
