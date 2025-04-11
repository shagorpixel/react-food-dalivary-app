import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
const SignIn = ({setIsLoginOpen}) => {
    const [currentState,setCurrentState] = useState('Sign Up')
    return (
        <div className=" w-full mt-32 max-w-sm fixed left-1/2 -translate-x-1/2 bg-white p-4 pb-8 rounded-md space-y-3 z-10 shadow-md ">
            <h2 className=" text-2xl font-semibold">Sign Up</h2>
            <span onClick={()=>setIsLoginOpen(false)} className=" absolute right-1 top-4 text-2xl cursor-pointer"><IoCloseOutline /></span>
            <form className=" space-y-3">
                { currentState=== 'Sign Up' &&
                <input className=" w-full border border-primary py-1 px-2 rounded outline-none" type="text" placeholder="Your Name" />
                }
                <input className=" w-full border border-primary py-1 px-2 rounded outline-none" type="email" placeholder="Your Email" />
                <input className=" w-full border border-primary py-1 px-2 rounded outline-none" type="email" placeholder="Password" />
                <button className=" w-full text-white font-semibold bg-primary py-1 px-2 rounded cursor-pointer">{currentState==="Sign Up"?'Create An Account':'Login'}</button>
                {currentState==="Sign Up"&&
                <label>
                    <input className=" mr-2 accent-primary" type="checkbox" />
                    by continuing you agree to the terms of use and privacy policy
                </label>
                }
                {
                        currentState==="Sign Up"? <p className=" mt-2">Have an Acount?<span className=" text-primary cursor-pointer" onClick={()=>setCurrentState(()=>"Login")}>Login Here</span></p>:
                        <p>New User?<span className=" text-primary cursor-pointer" onClick={()=>setCurrentState(()=>"Sign Up")}>Sign Up Here</span></p>
                    }
            </form>
        </div>
    );
};

export default SignIn;