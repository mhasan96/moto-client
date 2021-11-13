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
            It’s difficult to put into words just how transformational travel
            can be. Thankfully, artists, authors, philosophers, and world
            travelers have captured that essence in inspirational travel quotes
            that remind us of our past journeys and serve as fuel for future
            trips.
          </p>
        </div>
        <div className="text-left bg-blue-500" style={{ padding: "40px" }}>
          <p className="text-3xl">World Class Travelling Guide</p>
          <p>
            It’s difficult to put into words just how transformational travel
            can be. Thankfully, artists, authors, philosophers, and world
            travelers have captured that essence in inspirational travel quotes
            that remind us of our past journeys and serve as fuel for future
            trips.
          </p>
        </div>
        <div
          className="text-left"
          style={{ backgroundColor: "#3eb8d7", padding: "40px" }}
        >
          <p className="text-3xl"> Installment Services</p>
          <p>
            It’s difficult to put into words just how transformational travel
            can be. Thankfully, artists, authors, philosophers, and world
            travelers have captured that essence in inspirational travel quotes
            that remind us of our past journeys and serve as fuel for future
            trips.
          </p>
        </div>
      </div>
      <p className="m-12 text-4xl">Traveling is Happiness</p>
      <div className="">
        <div className="mt-20">
          <p className="text-3xl text-center"></p>
          <p>
            It’s difficult to put into words just how transformational travel
            can be. Thankfully, artists, authors, philosophers, and world
            travelers have captured that essence in inspirational travel quotes
            that remind us of our past journeys and serve as fuel for future
            trips. We’ve rounded up some of the best travel quotes from the
            likes of Anthony Bourdain, Oprah Winfrey, and more, so you can get
            excited for your next bucket list trip. These beautiful quotes also
            make perfect travel captions for Instagram, so add them to your next
            post to encourage your followers to get out and explore.
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
