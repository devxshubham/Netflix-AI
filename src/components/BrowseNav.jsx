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
    <nav className="flex absolute z-10 top-0 left-0 right-0 justify-between px-32 py-6 bg-gradient-to-b from-black to-transparent ">
      <Header></Header>

      <div className="flex text-white gap-5">
        <button>Home</button>
        <button>TV shows</button>
        <button>Movies</button>
        <button>New & Popular</button>
        <button>Browse By Language</button>
      </div>
      <div className="flex  gap-5">
        {showAI ? (
          <select name="language" id="" className="bg-black text-white p-1 border-white rounded" onChange={handleLanguageChange}>
            {SUPPORTED_LANG?.map((lang) => {
              return <option value={lang.identifier}>{lang.name}</option>;
            })}
          </select>
        ) : (
          <></>
        )}
        <button
          className="bg-transparent text-white px-3 py-2 border rounded"
          onClick={handleAiSearch}
        >
          AI Search
        </button>
        <img src={AVATAR} alt="" />
        <button className="bg-black text-white" onClick={handleSignout}>
          log out
        </button>
      </div>
    </nav>
  );
}

export default BrowseNav;
