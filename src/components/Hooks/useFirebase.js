import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();

  //Login Using Google
  const SignInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();

    return (
      signInWithPopup(auth, googleProvider)
        // .then((result) => {
        //   setUser(result.user);
        // })
        .finally(() => setIsLoading(false))
    );
  };
  //User State Change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  //LogOut
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })

      .finally(() => setIsLoading(false));
  };

  return {
    user,
    useFirebase,
    SignInUsingGoogle,
    logOut,
    isLoading,
  };
};

export default useFirebase;
