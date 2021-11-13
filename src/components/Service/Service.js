import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import Slider from "react-slick";

const Service = ({ service }) => {
  const { Name, img, Description, _id, Price } = service;
  return (
    <div className="container">
      <div class="py-6">
        <div class="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
          <div
            class="w-1/2 bg-cover"
            style={{ backgroundImage: `url(${img})` }}
          >
            {" "}
          </div>
          <div class="w-2/3 p-4">
            <h1 class="text-gray-900 font-bold text-2xl">{Name}</h1>
            <p class="mt-2 text-gray-600 text-sm">{Description}</p>
            <div class="flex item-center mt-2"></div>
            <div class="flex item-center justify-between mt-3">
              <h1 class="text-gray-700 font-bold text-xl">${Price}</h1>
              <NavLink to={`/service/${_id}`}>
                <button class="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                  Buy Now
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
