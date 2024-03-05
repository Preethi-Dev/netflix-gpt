import React, { useEffect } from "react";
import Signout from "./Signout";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";

const Header = () => {
  //subscribe to the store
  const user = useSelector((state) => state.user);

  //dispatch
  const dispatch = useDispatch();

  //navigate
  const navigate = useNavigate();

  useEffect(() => {
    //check for auth state
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unSubscribe();
  }, []);

  return (
    <div className="md:flex justify-between items-center text-white z-30 relative">
      <div className="w-56 p-6 mx-auto md:mx-0">
        <img src={LOGO} alt="logo" />
      </div>
      {user && <Signout />}
    </div>
  );
};

export default Header;
