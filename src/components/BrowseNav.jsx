import Header from './Header'
import { AVATAR } from "../utils/constants";

import {auth} from '../utils/firebase'
import { signOut } from "firebase/auth";


function BrowseNav() {

    function handleSignout(){
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }


    return <nav className="flex justify-between px-32 py-6 bg-gradient-to-b from-black to-transparent ">
        <Header></Header>
        <div className="flex text-white gap-5">
            <button>Home</button>
            <button>TV shows</button>
            <button>Movies</button>
            <button>New & Popular</button>
            <button>Browse By Language</button>
        </div>
        <div className="flex  gap-5">
                <img src={AVATAR} alt="" />
                <button className="bg-black text-white" onClick={handleSignout}>log out</button>
        </div>
    </nav>
}

export default BrowseNav;