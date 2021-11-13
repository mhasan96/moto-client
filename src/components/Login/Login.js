import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";

import { useState } from "react";

import initializeAuthentication from "../Firebase/firebase.init";
import useAuth from "../Hooks/useAuth";

// import "./App.css";

function Registration() {
  const { SignInUsingGoogle } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState("");

  initializeAuthentication();
  const auth = getAuth();

  const handleRegistration = (e) => {
    e.preventDefault();
    console.log(email, password);
    if (password.length < 6) {
      setError("Password Should be at least 6 characters");
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("Password should have two upper case");
      return;
    }
    isLogin ? processLogin(email, password) : createNewUser(email, password);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const processLogin =
    (email,
    (password) => {
      signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          setError("");
        })
        .catch((error) => {
          setError(error.message);
        });
    });
  const createNewUser =
    (email,
    (password) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          setError("");
          // verifyEmail();
          setUserName();
        })
        .catch((error) => {
          setError(error.message);
        });
    });

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email).then((result) => {});
  };
  return (
    <div className="container register-form mt-12 ">
      <div className="bg-grey-lighter min-h-screen flex flex-col lg:mx-64">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <div className="mx-5 mt-5">
              <form onSubmit={handleRegistration}>
                <p className="text-primary text-2xl mb-8">
                  {isLogin
                    ? "Already have an account? Please, Login"
                    : "New Here? Please, Register"}
                </p>
                {!isLogin && (
                  <div className="row mb-3">
                    <label
                      htmlFor="inputEmail3"
                      className="col-sm-2 col-form-label "
                    >
                      Name
                    </label>
                    <div className="col-sm-10">
                      <input
                        onBlur={handleNameChange}
                        type="name"
                        className="form-control"
                        id="Name"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                )}
                <div className="row mb-3">
                  <label
                    htmlFor="inputEmail3"
                    className="col-sm-2 col-form-label"
                  >
                    Email
                  </label>
                  <div className="col-sm-10">
                    <input
                      onBlur={handleEmailChange}
                      type="email"
                      className="form-control"
                      id="inputEmail3"
                      required
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="inputPassword3"
                    required
                    className="col-sm-2 col-form-label"
                  >
                    Password
                  </label>
                  <div className="col-sm-10">
                    <input
                      onBlur={handlePasswordChange}
                      type="password"
                      className="form-control"
                      id="inputPassword3"
                      required
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-10 offset-sm-2">
                    <div className="form-check cursor-pointer">
                      {/* <input
                        onChange
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck1"
                      /> */}
                      {isLogin ? (
                        <p
                          onClick={() => setIsLogin(false)}
                          className="form-check-label"
                          htmlFor="gridCheck1"
                        >
                          New Here?
                        </p>
                      ) : (
                        <p
                          onClick={() => setIsLogin(true)}
                          className="form-check-label"
                          htmlFor="gridCheck1"
                        >
                          Already Registered?
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="row mb-3 text-danger">{error}</div>
                <button type="submit" className="btn btn-sm btn-primary">
                  {isLogin ? "Login" : "Register"}
                </button>

                <button
                  onClick={handleResetPassword}
                  type="button"
                  className="ml-4 btn btn-secondary btn-sm"
                >
                  Reset Password
                </button>
                <p className="m-4">Or, Sign in With Google</p>
                <button
                  onClick={SignInUsingGoogle}
                  className="me-4 text-reset border-2 p-2"
                >
                  <i className="fab fa-google"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
