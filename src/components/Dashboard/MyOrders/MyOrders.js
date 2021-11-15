import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

const MyOrders = () => {
  const { user } = useAuth();
  //   const [services, setServices] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/order?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure? You want to Delete?");
    if (proceed) {
      const url = `http://localhost:5000/order/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            alert("Successfully Deleted ");
            const remaining = orders.filter((service) => service._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h2>Total Orders: {orders.length}</h2>
      <TableContainer className="grid grid" component={Paper}>
        <Table className="flex" sx={{}} aria-label="Order List">
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
                  <Button variant="outlined" color="error">
                    {row.status}
                  </Button>
                </TableCell>
                <TableCell className="text-red-500" align="right">
                  {orders.slice(0, 1).map((service) => (
                    <Button onClick={() => handleDelete(service._id)}>
                      Delete
                    </Button>
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MyOrders;
