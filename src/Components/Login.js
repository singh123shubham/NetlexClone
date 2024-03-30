import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidata } from "../Utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { BANNER_IMG, profileURL } from "./Constants";

const Login = () => {
  const [isSignInForm, setIsSignInFrom] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleToggleSignInForm = () => {
    setIsSignInFrom(!isSignInForm);
  };

  const handleButtonClick = () => {
    // validate from data
    const message = checkValidata(
      email.current.value,
      password.current.value
      //name.current.value
    );
    setErrorMessage(message);

    // Sign In /Sign Up
    if (!isSignInForm) {
      // sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: profileURL,
          })
            .then(() => {
              // Profile updated!
              const {
                uid,
                email,
                displayName,
                photoURL: photoURL,
              } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred

              setErrorMessage(error.message);
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " : " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute w-full">
        <img
          className="relative w-full h-[170vh] sm:h-[180vh] md:h-[165vh] -z-10 object-cover md:object-fill"
          src={BANNER_IMG}
          alt="banner"
        />
      </div>

      <form
        className=" absolute p-6 md:p-12 bg-black w-72  md:w-5/12 my-20 md:my-40 mx-auto right-0 left-0 rounded-lg bg-opacity-80 "
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className=" font-bold text-3xl text-yellow-50 py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-slate-200 rounded-sm"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-slate-200 rounded-sm"
        />
        <input
          ref={password}
          type="password"
          placeholder="Enter password"
          className="p-4 my-4 w-full bg-slate-200 rounded-sm"
        />
        {errorMessage && (
          <p className="text-red-500 py-2 font-bold">{errorMessage}</p>
        )}
        <button
          className="p-2 my-6 bg-red-600 w-full text-white font-bold rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <h1 className="text-white">Forgot Password?</h1>
        <p
          className="text-white cursor-pointer"
          onClick={handleToggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
