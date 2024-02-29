import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Signout = () => {
  const navigate = useNavigate();
  //hnadle sign out
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
    });
  };
  return (
    <div className="mr-12 flex gap-3 items-center cursor-pointer">
      <img
        src="https://occ-0-6288-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
        alt="user Profile"
      />
      <p onClick={handleSignOut}>Sign Out</p>
    </div>
  );
};

export default Signout;
