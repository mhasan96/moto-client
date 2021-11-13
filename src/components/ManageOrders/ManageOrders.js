import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const ManageOrders = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure? You want to Delete?");
    if (proceed) {
      const url = `http://localhost:5000/services/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            alert("Successfully Deleted ");
            const remaining = services.filter((service) => service._id !== id);
            setServices(remaining);
          }
        });
    }
  };
  return (
    <div>
      <h2 className="mt-24">Manage Services</h2>
      <div className="grid grid-cols-3 gap-4">
        {services.map((service) => (
          <div key={service._id} className="border-2 ">
            <img
              style={{ height: "250px", width: "500px" }}
              src={service.img}
              alt=""
            />
            <h3>{service.Name}</h3>
            <Button
              onClick={() => handleDelete(service._id)}
              className="btn-danger"
            >
              Delete
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageOrders;
