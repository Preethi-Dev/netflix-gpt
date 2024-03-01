import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  //dispatch
  const dispatch = useDispatch();

  //create references
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleClickButton = (e) => {
    e.preventDefault();
    //validation
    const message = name.current
      ? checkValidData(
          email.current.value,
          password.current.value,
          name.current.value
        )
      : checkValidData(email.current.value, password.current.value);
    //set error message
    setErrorMsg(message);
    //contains an error
    if (message) return;
    //Sign In and SignUp Logic
    if (isSignIn) {
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
          setErrorMsg(`${errorCode} - ${errorMessage}`);
        });
    } else {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, { displayName: name.current.value })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName }));
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMsg(`${errorCode} - ${errorMessage}`);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(`${errorCode} - ${errorMessage}`);
        });
    }
  };

  return (
    <div
      className="min-h-[100vh] bg-black"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg")',
      }}
    >
      <div className="max-w-[1200px] m-auto flex flex-col gap-16 min-h-[100vh]">
        <Header />
        <form className="bg-black/[0.7] flex flex-col self-center gap-4 px-16 py-12 min-w-[35rem] text-white">
          <p className="text-white text-4xl pb-7">
            {isSignIn ? "Sign In" : "Sign Up"}
          </p>
          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="px-4 py-3 bg-gray-950/[.7] rounded-md border border-gray-500 placeholder:text-gray-500 placeholder:text-sm"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email or phone number"
            className="px-4 py-3 bg-gray-950/[.7] rounded-md border border-gray-500 placeholder:text-gray-500 placeholder:text-sm"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="px-4 py-3 bg-gray-950/[.7] rounded-md border border-gray-500 placeholder:text-gray-500 placeholder:text-sm"
          />
          <p className="text-red-700 text-lg">{errorMsg}</p>
          <button
            className="px-4 py-2 bg-red-600 border-none text-white rounded-lg "
            onClick={handleClickButton}
          >
            Sign In
          </button>
          <p
            className="text-gray-500 cursor-pointer"
            onClick={() => setIsSignIn(!isSignIn)}
          >
            {isSignIn ? "New to Netflix? Sign Up" : "Already a User? Sign In"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
