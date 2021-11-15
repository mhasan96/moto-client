import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Explore from "../Explore/Explore";
import useAuth from "../Hooks/useAuth";
import ManageUserOrders from "../ManageUserOrders/ManageUserOrders";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://dry-thicket-62738.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        const slicedData = data.slice(2, 8);
        setServices(slicedData);
      });
  }, []);
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return <Spinner animation="border" variant="danger" />;
  }
  return (
    <div id="services" className="container mt-16">
      <p className="text-3xl">Our Top Selling Cars</p>
      <div className="grid lg:grid-cols-3 mt-16 sm:grid-cols-1 gap-4">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
