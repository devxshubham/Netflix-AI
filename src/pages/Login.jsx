// rafce

import { useRef, useState } from "react"

import Header from "../components/Header"
import { validate } from "../utils/validate";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/store/userSlice";
import { NETFLIX_BACKGROUND } from "../utils/constants";


const Login = () => {
    const dispatch = useDispatch();

    const [signup, setSignup] = useState(false);
    const [viewPassword, setViewPassword] = useState(false)

    const email = useRef();
    const password = useRef();
    const fullname = useRef();

    const [errorMessage, seterrorMessage] = useState(null)

    function handleSubmit(){
        const message = validate(email.current.value, password.current.value);
            seterrorMessage(message);
            if( message ) return

            if( signup ){
                createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {

                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: fullname.current.value
                      }).then(() => {
                        const {uid,email,displayName} = auth.currentUser;
                        dispatch( addUser({
                            uid: uid,
                            email: email,
                            displayName: displayName,
                          }) );
                      }).catch((error) => {
                        // An error occurred
                        // ...
                      });

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMess = error.message;
                    seterrorMessage(errorMess)
                });
            }
            else{
                signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    const {uid,email,displayName} = auth.currentUser;
                        dispatch( addUser({
                            uid: uid,
                            email: email,
                            displayName: displayName,
                          }) );
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMess = error.message;
                    seterrorMessage(errorMess)
                });
            }
        
    }

    function handleSignup(){
        setSignup( prev => !prev);
    }

    return <div  className="flex relative mx-auto ">
        <Header></Header>
        <div className="absolute z-5 w-screen h-screen">
            <div className="absolute z-5 bg-black bottom-0 w-screen h-screen opacity-60"></div>
            <img className="w-screen h-screen z-0 object-cover	" src={NETFLIX_BACKGROUND} 
                alt="background" />
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className="flex  flex-col gap-3 rounded-md mx-auto mt-32 p-10 justify-center items-start relative z-20 bg-black/70" >
            <h1 className="font-bold text-white text-[28px] ">{signup ? "Sign Up" : "Sign In" }</h1>
            {signup ? 
                <input 
                    className="px-5 text-white py-2 rounded border bg-transparent"  
                    type="text" 
                    placeholder="Full Name" 
                    ref={fullname}
                /> 
                : 
                <></>
            }
            <input 
                className="px-5 text-white py-2 rounded border bg-transparent"  
                type="email" 
                placeholder="Email" 
                ref={email}
            />
            <input 
                className="px-5 py-2 text-white rounded border bg-transparent"  
                type={viewPassword ? "text" : "password"} 
                placeholder="Password" 
                ref={password}
            />
            <button className="bg-white " onClick={()=> setViewPassword(prev => !prev)} > ** </button>
            {errorMessage ? <p className="text-red-500 text-center w-full">{errorMessage}</p> : <></>}
            <button 
                className=" bg-[#e80c14] w-full px-5 py-2 rounded z-21 opacity-100 text-white"
                onClick={() => handleSubmit()}
            >
                Sign In
            </button>

            <div className=" text-white/70 text-center w-full">OR</div>
            <div className="text-white opacity-100">Forgot Password?</div>
            <div className="text-white/70">New to Netflix?  
                <button onClick={handleSignup} className="text-white font-bold ">{signup ? " Sign in now" : " Sign up now" }</button></div>
        </form>
    </div>
}

export default Login