import Header from "./Header";
import { AVATAR } from "../utils/constants";

import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { toggleState } from "../utils/store/AIsearchSlice";
import languages, { SUPPORTED_LANG } from "../utils/languageConstant";
import { setLanguage } from "../utils/store/languageSlice";

function BrowseNav() {
  const showAI = useSelector((store) => store.AIshow.showSearch);

  function handleSignout() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  }
  const dispatch = useDispatch();
  function handleAiSearch() {
    dispatch(toggleState());
  }

  function handleLanguageChange(e) {
    dispatch(setLanguage(e.target.value));
  }

  return (
    <nav className="flex flex-col md:flex-row items-end md:items-center absolute z-10 top-0 left-0 right-0 md:justify-between px-10 md:px-32 py-6 bg-gradient-to-b from-black to-transparent ">
      <Header></Header>

      <div className="md:flex hidden  text-white gap-5">
        <button className="whitespace-nowrap">Home</button>
        <button className="whitespace-nowrap">TV shows</button>
        <button className="whitespace-nowrap">Movies</button>
        <button className="whitespace-nowrap">New & Popular</button>
      </div>
      <div
        className={`flex -ml-14 md:ml-0 ${
          showAI ? "mt-10" : ""
        } md:mt-0 gap-2 md:gap-5`}
      >
        {showAI ? (
          <select
            name="language"
            id=""
            className="bg-black text-white p-1 border-white rounded-md"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANG?.map((lang) => {
              return (
                <option
                  key={lang.name}
                  className="text-[10px]"
                  value={lang.identifier}
                >
                  {lang.name}
                </option>
              );
            })}
          </select>
        ) : (
          <></>
        )}
        <button
          className="whitespace-nowrap bg-transparent text-white px-1 py-1 md:px-3 md:py-2 border rounded"
          onClick={handleAiSearch}
        >
          AI Search
        </button>
        <img className=" object-contain rounded" src={AVATAR} alt="" />
        <button
          className="bg-black whitespace-nowrap text-white px-1 md:px-3 py-1 rounded"
          onClick={handleSignout}
        >
          log out
        </button>
      </div>
    </nav>
  );
}

export default BrowseNav;
