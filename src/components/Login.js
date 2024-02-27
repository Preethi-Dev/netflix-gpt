import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

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
        <form className="bg-black/[0.7] flex flex-col self-center gap-4 px-16 py-12 min-w-[35rem]">
          <p className="text-white text-4xl pb-7">
            {isSignIn ? "Sign In" : "Sign Up"}
          </p>
          {!isSignIn && (
            <input
              type="text"
              placeholder="Name"
              className="px-4 py-3 bg-gray-950/[.7] rounded-md border border-gray-500 placeholder:text-gray-500 placeholder:text-sm"
            />
          )}
          <input
            type="text"
            placeholder="Email or phone number"
            className="px-4 py-3 bg-gray-950/[.7] rounded-md border border-gray-500 placeholder:text-gray-500 placeholder:text-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-3 bg-gray-950/[.7] rounded-md border border-gray-500 placeholder:text-gray-500 placeholder:text-sm"
          />
          <button className="px-4 py-2 bg-red-600 border-none text-white rounded-lg ">
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
