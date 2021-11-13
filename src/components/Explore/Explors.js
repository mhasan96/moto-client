import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
// import Explore from "./Explore";

const Explors = () => {
  const [exploreServices, setExploreServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setExploreServices(data));
  }, []);

  const { user, isLoading } = useAuth();
  if (isLoading) {
    return <Spinner animation="border" variant="danger" />;
  }
  return (
    <div id="services" className="container mt-16">
      <p className="text-3xl">All Top Rated Cars</p>
      <div className="grid lg:grid-cols-3 mt-16 sm:grid-cols-1 gap-4">
        {exploreServices.map((explore) => (
          <div className="container">
            <div class="py-6">
              <div class="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                <div
                  class="w-1/2 bg-cover"
                  style={{ backgroundImage: `url(${explore.img})` }}
                >
                  {" "}
                </div>
                <div class="w-2/3 p-4">
                  <h1 class="text-gray-900 font-bold text-2xl">
                    {explore.Name}
                  </h1>
                  <p class="mt-2 text-gray-600 text-sm">
                    {explore.Description}
                  </p>
                  <div class="flex item-center mt-2"></div>
                  <div class="flex item-center justify-between mt-3">
                    <h1 class="text-gray-700 font-bold text-xl">
                      ${explore.Price}
                    </h1>
                    <NavLink to={`/service/${explore._id}`}>
                      <button class="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                        Buy Now
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explors;
