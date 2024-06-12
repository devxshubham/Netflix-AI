import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from 'react-redux'

import Login from "./pages/Login";

import { auth } from "./utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "./utils/store/userSlice";



function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  useEffect( ()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/browse');
      } else {
        dispatch( removeUser() );
        navigate('/');
      }

    });

    return () => unsubscribe();
  },[])

  return (
    <Outlet></Outlet>
  );
}

export default App;
