import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";
import React from "react";
import { useState } from "react";
import { useHistory, useLocation } from "react-router";

import initializeAuthentication from "../Firebase/firebase.init";
import useAuth from "../Hooks/useAuth";

function Registration() {
  const { SignInUsingGoogle } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState("");
  const histroy = useHistory();
  initializeAuthentication();
  const auth = getAuth();
  const [showModal, setShowModal] = React.useState(false);

  //Redirect to Old Page
  const location = useLocation();
  // console.log("came from", location.state?.from);
  const handleGoogleLogin = () => {
    SignInUsingGoogle()
      .then((result) => {
        histroy.push(location.state?.from || "/home");

        // setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //Handle User Registration
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

  //User Login
  const processLogin =
    (email,
    (password) => {
      signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          histroy.push(location.state?.from || "/home");
          // window.history.reload();
          // console.log(user);
          setError("");
        })
        .catch((error) => {
          setError(error.message);
        });
    });

  //Create New Account
  const createNewUser =
    (email,
    (password) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          // const user = result.user;
          histroy.push(location.state?.from || "/home");
          // console.log(user);
          setError("");

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
    <div className="container">
      <div className="  flex flex-col w-full items-center mb-32 mt-32 mx-auto max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
          Login To Your Account
        </div>

        <div className="mt-8">
          <form onSubmit={handleRegistration}>
            {!isLogin && (
              <div className="flex flex-col mb-2">
                <div className="flex relative ">
                  <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <svg
                      width="15"
                      height="15"
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                    </svg>
                  </span>
                  <input
                    type="name"
                    onBlur={handleNameChange}
                    id="sign-in-email"
                    className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
              </div>
            )}
            <div className="flex flex-col mb-2">
              <div className="flex relative ">
                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <svg
                    width="15"
                    height="15"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                  </svg>
                </span>
                <input
                  type="email"
                  onBlur={handleEmailChange}
                  id="sign-in-email"
                  className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Your email"
                />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <div className="flex relative ">
                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <svg
                    width="15"
                    height="15"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
                  </svg>
                </span>
                <input
                  type="password"
                  onBlur={handlePasswordChange}
                  id="sign-in-email"
                  className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Your password"
                />
              </div>
            </div>
            <div className="flex items-center mb-6 -mt-4">
              <div className="flex ml-auto cursor-pointer">
                {!isLogin && (
                  <p
                    href="#"
                    onClick={handleResetPassword}
                    className="inline-flex text-xs font-thin text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white"
                  >
                    Forgot Your Password?
                  </p>
                )}
              </div>
            </div>
            <div className="flex w-full">
              <button
                type="submit"
                onClick={() => setShowModal(true)}
                className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                {isLogin ? "Login" : "Register"}
              </button>
              {showModal && !isLogin && email ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-sm">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="  p-5  border-blueGray-200 rounded-t">
                          <svg
                            className="h-20 w-20 border-1 bg-green-100 rounded-full  m-auto text-green-500"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                        {/*body*/}
                        <div className="relative  p-6 flex-auto">
                          <p className=" text-gray-500 text-4xl leading-relaxed">
                            Great!!
                          </p>
                          <p className=" text-gray-400 text-lg leading-relaxed">
                            Account has been Created Successfully
                          </p>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-center mb-4 border-solid rounded-b">
                          <button
                            className="text-white  background-transparent font-bold uppercase px-6 py-2 text-sm outline-none bg-blue-500 rounded-lg focus:outline-none  ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </div>
            <div className="row mb-3 mt-2 text-danger">{error}</div>
            <div className="flex items-center justify-center mt-6 cursor-pointer">
              {isLogin ? (
                <p
                  target="_blank"
                  onClick={() => setIsLogin(false)}
                  className="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white ml-2"
                >
                  You don&#x27;t have an account?
                </p>
              ) : (
                <p
                  target="_blank"
                  onClick={() => setIsLogin(true)}
                  className="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white ml-2"
                >
                  Already have an account?
                </p>
              )}
            </div>
            <br />
            <div className=" gap-4 item-center">
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="mr-2"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
                </svg>
                Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
