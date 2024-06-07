import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Browse = () => {
    const navigate = useNavigate();

    const user = useSelector( store => store.user)

    function handleLogout(){
        signOut(auth).then(() => {
        // Sign-out successful.
            // navigate('/');
        }).catch((error) => {
        // An error happened.
        });
    }
    return <div className="flex justify-between">
        <div>hello {user?.displayName}</div> 
        <button className="bg-black text-white" onClick={handleLogout}>log out</button>
    </div>
}

export default Browse