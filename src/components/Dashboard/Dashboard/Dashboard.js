import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import { Nav } from "react-bootstrap";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import useAuth from "../../Hooks/useAuth";
import Sidebar from "../Sidebar/Sidebar";
import AddNewProducts from "./AddNewProducts/AddNewProducts";
import AdminRoute from "../../AdminRoute/AdminRoute";
import ManageProducts from "../ManageProducts/ManageProducts";
import PostReviews from "../PostReviews/PostReviews";
import MyOrders from "../MyOrders/MyOrders";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import Pay from "../Pay/Pay";

const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const { admin, logout, user } = useAuth();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Link to={`${url}`}>
        <Button color="inherit">Dashboard</Button>
      </Link>
      <Link to={`${url}/postReview`}>
        <Button color="inherit">Post Review</Button>
      </Link>
      <Link to={`${url}/myOrders`}>
        <Button color="inherit">My Orders</Button>
      </Link>
      <br />
      <Link to={`${url}/pay`}>
        <Button color="inherit">Pay</Button>
      </Link>
      <br />
      {user.email && (
        <Nav.Link className="text-black " onClick={logout}>
          Logout
        </Nav.Link>
      )}
      {admin && (
        <Box>
          <Link to={`${url}/makeAdmin`}>
            <Button color="inherit">Make Admin</Button>
          </Link>
          <Link to={`${url}/addNewProducts`}>
            <Button color="inherit">Create Products</Button>
          </Link>
          <Link to={`${url}/manageOrders`}>
            <Button color="inherit">Manage Products</Button>
          </Link>
          <Link to={`${url}/manageAllOrders`}>
            <Button color="inherit">Manage All Orders</Button>
          </Link>
        </Box>
      )}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <Sidebar></Sidebar>
          </Route>
          <Route path={`${path}/postReview`}>
            <PostReviews></PostReviews>
          </Route>
          <Route path={`${path}/myOrders`}>
            <MyOrders></MyOrders>
          </Route>
          <Route path={`${path}/pay`}>
            <Pay></Pay>
          </Route>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/addNewProducts`}>
            <AddNewProducts></AddNewProducts>
          </AdminRoute>
          <AdminRoute path={`${path}/manageOrders`}>
            <ManageProducts></ManageProducts>
          </AdminRoute>
          <AdminRoute path={`${path}/manageAllOrders`}>
            <ManageAllOrders></ManageAllOrders>
          </AdminRoute>
          {/* <AdminRoute path={`${path}/addDoctor`}>
            <AddDoctor></AddDoctor>
          </AdminRoute> */}
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
