import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./components/context/AuthProvider";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./components/NotFound/NotFound";
import AboutUS from "./components/PrivateRoute/AboutUs/AboutUS";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
// import Registration from "./components/Registration/Registration";
import SingleService from "./components/SingleService/SingleService";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Explors from "./components/Explore/Explors";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
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
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/explore">
              <Explors></Explors>
            </PrivateRoute>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
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
