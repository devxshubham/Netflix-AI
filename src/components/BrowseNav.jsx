import Header from "./Header";
import { AVATAR } from "../utils/constants";

import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { toggleState } from "../utils/store/AIsearchSlice";

function BrowseNav() {
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
        <button></button>
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
