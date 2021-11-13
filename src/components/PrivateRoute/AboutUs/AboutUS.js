import React from "react";

import img from "../../../images/1.jpg";
const Laboratory = () => {
  return (
    <div className="container mt-5  mb-64" style={{ paddingTop: "50px" }}>
      <p className="mt-5 text-3xl ">Traveling is Happiness</p>
      <p className="m-12 text-4xl"></p>
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

export default Laboratory;
