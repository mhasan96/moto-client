import React from "react";
import { Grid } from "@mui/material";
// import Sidebar from "../Sidebar/Sidebar";

const Sidebar = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12} lg={4}>
        {/* <Sidebar></Sidebar> */}
      </Grid>
      <Grid item xs={12} md={12} lg={7}>
        {/* <Appointments date={date}></Appointments> */}
      </Grid>
    </Grid>
  );
};

export default Sidebar;
