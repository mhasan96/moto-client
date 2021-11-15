import React from "react";
import { NavLink } from "react-router-dom";
// import logo from "../../../images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-gray-800  text-gray-300 mt-20 ">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom text-white">
        <div className="me-5  d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div className="">
          <NavLink to="/" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </NavLink>
          <NavLink to="/" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </NavLink>
          <NavLink to="/" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </NavLink>
          <NavLink to="/" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </NavLink>
          <NavLink to="/" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </NavLink>
          <NavLink to="/" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </NavLink>
        </div>
      </section>

      <section className="container">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i> Moto WOrld
              </h6>
              <p>
                Bayerische Motoren Werke AG, commonly known as Bavarian Motor
                Works, BMW or BMW AG, is a German automobile, motorcycle and
                engine manufacturing company founded in 1916. ... It also owns
                and produces Mini cars, and is the parent company of Rolls-Royce
                Motor Cars. BMW produces motorcycles under BMW Motorrad.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Special Services</h6>
              <p>
                <NavLink to="#!" className=" text-reset">
                  Apply Now
                </NavLink>
              </p>
              <p>
                <NavLink to="#!" className="text-reset">
                  Subscribe To Our Email
                </NavLink>
              </p>
              <p>
                <NavLink to="#!" className="text-reset">
                  Learn More
                </NavLink>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <NavLink to="#!" className="text-reset">
                  Pricing
                </NavLink>
              </p>
              <p>
                <NavLink to="#!" className="text-reset">
                  Orders
                </NavLink>
              </p>
              <p>
                <NavLink to="#!" className="text-reset">
                  Best Cars
                </NavLink>
              </p>
              <p>
                <NavLink to="#!" className="text-reset">
                  Help
                </NavLink>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i> 8/A, Dhanmondi, Dhaka-1207
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                info@carmoto.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> +880150000000
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05);" }}
      >
        © 2021 Copyright: Mehedi Hasan
      </div>
    </footer>
  );
};

export default Footer;
