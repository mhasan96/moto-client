import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useForm, Controller } from "react-hook-form";

import { Button } from "@mui/material";

const ManageAllOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState("");
  const { control } = useForm();

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };
  // const handleUpdate = (id) => {
  //   fetch(`http:localhost:5000/order/${id}`)
  // };
  // console.log(status);

  useEffect(() => {
    const url = "https://dry-thicket-62739.herokuapp.com/order";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  const handleShipping = (id) => {
    const proceed = window.confirm("Are you sure? You want to Update?");
    if (proceed) {
      const url = `https://dry-thicket-62739.herokuapp.com/updateStatus/${id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ status }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount) {
            alert("Successfully Shipped the Product ");
          }
        });
    }
  };
  return (
    <div>
      <h2>Total Orders: {orders.length}</h2>
      <TableContainer component={Paper}>
        <Table sx={{}} aria-label="Order List">
          <TableHead>
            <TableRow>
              {/* <TableCell>Image</TableCell> */}
              <TableCell align="right">Car Model</TableCell>
              <TableCell align="right">User Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">City</TableCell>
              <TableCell align="right">Contact Number</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{row.Cars_Name}</TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.address}</TableCell>
                <TableCell align="right">{row.city}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell className="text-red-500" align="right">
                  <input
                    onChange={handleStatus}
                    type="text"
                    defaultValue={row.status}
                  />
                  <Controller
                    render={({ field }) => <input {...field} />}
                    name="firstName"
                    control={control}
                    defaultValue=""
                  />
                </TableCell>
                <TableCell align="right">
                  <Button onClick={() => handleShipping(row._id)}>
                    Update
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ManageAllOrders;
