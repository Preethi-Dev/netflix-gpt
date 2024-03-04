import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";

const Signout = () => {
  //dispatch
  const dispatch = useDispatch();
  //subscribe to the store(gpt slice)
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  //handle sign out
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  //handle GPT Search click
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  //handle lang dropdown
  const handleLangDropDown = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="mr-12 flex gap-3 items-center cursor-pointer">
      {showGptSearch && (
        <select
          name="lang"
          id="lang"
          className="text-black"
          onChange={handleLangDropDown}
        >
          {SUPPORTED_LANGUAGES.map((lang) => (
            <option key={lang.identifier} value={lang.identifier}>
              {lang.name}
            </option>
          ))}
        </select>
      )}
      <button
        className="px-4 py-2 bg-white text-black rounded-lg font-semibold"
        onClick={handleGptSearchClick}
      >
        {showGptSearch ? "Browse" : "GPT Search"}
      </button>
      <img
        src="https://occ-0-6288-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
        alt="user Profile"
      />
      <p onClick={handleSignOut}>Sign Out</p>
    </div>
  );
};

export default Signout;
