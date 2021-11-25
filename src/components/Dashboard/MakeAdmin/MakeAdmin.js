import React, { useState } from "react";
import { Alert, Button, TextField } from "@mui/material";
import useAuth from "../../Hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSucess] = useState(false);
  // const { token } = useAuth();
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://dry-thicket-62739.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        // authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);

          setSucess(true);
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h2>Make an Admin</h2>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          lable="Email"
          type="email"
          onBlur={handleOnBlur}
          id="standard-basic"
          label="Standard"
          variant="standard"
        />
        <Button variant="contained" type="submit">
          Make Admin
        </Button>
      </form>
      {success && <Alert severity="success">Made Admin Successfully!</Alert>}
    </div>
  );
};

export default MakeAdmin;
