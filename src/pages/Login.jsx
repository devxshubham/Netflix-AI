// rafce

import { useState } from "react"
import Header from "../components/Header"


const Login = () => {

    const [signup, setSignup] = useState(false);

    function handleSignup(e){
        e.preventDefault()
        setSignup( prev => !prev)
    }

    return <div  className="flex relative mx-auto ">
        <Header></Header>
        <div className="absolute z-5 w-screen h-screen">
            <div className="absolute z-5 bg-black bottom-0 w-screen h-screen opacity-60"></div>
            <img className="w-screen h-screen z-0 object-cover	" src="https://assets.nflxext.com/ffe/siteui/vlv3/31ef2c5c-3d08-47d5-b7a9-f29e4f4f893d/3152e5c9-a0d5-495b-ab03-073a70c5d268/US-en-20240506-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34f5ff74-a994-4852-b27c-f4196ec21c67_small.jpg" 
                alt="background" />
        </div>
        <form className="flex  flex-col gap-3 rounded-md mx-auto mt-32 p-10 justify-center items-start relative z-20 bg-black/70" >
            <h1 className="font-bold text-white text-[28px] ">{signup ? "Sign Up" : "Sign In" }</h1>
            {signup ? <input className="px-5 py-2 rounded border bg-transparent"  type="text" placeholder="Full Name" /> : <></>}
            <input className="px-5 py-2 rounded border bg-transparent"  type="email" placeholder="Email" />
            <input className="px-5 py-2 rounded border bg-transparent"  type="password" placeholder="Password" />
            <button className=" bg-[#e80c14] w-full px-5 py-2 rounded z-21 opacity-100 text-white" >Sign In</button>

            <div className=" text-white/70">OR</div>
            <div className="text-white opacity-100">Forgot Password?</div>
            <div className="text-white/70">New to Netflix? <button onClick={handleSignup} className="text-white font-bold ">{signup ? "Sign in now" : "Sign up now" }</button></div>
        </form>
    </div>
}

export default Login