import React from "react";
import { Grid } from "@mui/material";
// import Sidebar from "../Sidebar/Sidebar";

const Sidebar = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12} lg={12}>
        <h1>Welcome to the Dashboard</h1>
      </Grid>
    </Grid>
  );
};

export default Sidebar;
