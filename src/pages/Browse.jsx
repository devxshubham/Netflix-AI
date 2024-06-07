import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import { AVATAR } from "../utils/constants";

const Browse = () => {
    const navigate = useNavigate();

    const user = useSelector( store => store.user)

    const loggedInUser = auth.currentUser

    function handleLogout(){
        signOut(auth).then(() => {
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        });
    }
    return <div className="flex relative justify-between">
        <Header></Header>
        <div>hello {user?.displayName}</div> 
        <div className="flex  gap-5">
            <img src={AVATAR} alt="" />
            <button className="bg-black text-white" onClick={handleLogout}>log out</button>
        </div>
    </div>
}

export default Browse