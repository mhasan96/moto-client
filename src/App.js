import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./components/context/AuthProvider";
import TravelPlace from "./components/TravelPlace/TravelPlace";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./components/NotFound/NotFound";
import AboutUS from "./components/PrivateRoute/AboutUs/AboutUS";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Registration from "./components/Registration/Registration";
import SingleService from "./components/SingleService/SingleService";
import AddNewService from "./components/AddNewService/AddNewService";
import ManageOrders from "./components/ManageOrders/ManageOrders";
import ManageUserOrders from "./components/ManageUserOrders/ManageUserOrders";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Explore from "./components/Explore/Explore";
import Explors from "./components/Explore/Explors";
import PostReviews from "./components/Home/Reviews/PostReviews";
// import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <NavBar></NavBar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/signup">
              <Registration></Registration>
            </Route>
            <PrivateRoute path="/addService">
              <AddNewService></AddNewService>
            </PrivateRoute>
            <PrivateRoute path="/reviews">
              <PostReviews></PostReviews>
            </PrivateRoute>
            <PrivateRoute path="/manageServices">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <ManageUserOrders></ManageUserOrders>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/explore">
              <Explors></Explors>
            </PrivateRoute>
            <PrivateRoute path="/TravelPlace">
              <TravelPlace></TravelPlace>
            </PrivateRoute>
            <PrivateRoute path="/about">
              <AboutUS></AboutUS>
            </PrivateRoute>
            <PrivateRoute path="/service/:id">
              <SingleService></SingleService>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
