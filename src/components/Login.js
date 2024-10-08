import { useState } from "react";
import Input from "./form/Input";
import Toggle from "./form/Toggle"
import logo from "../assets/logo.png"
import googleLogo from "../assets/googleLogo.png"

const Login = () => {
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <div className="h-full lg:h-auto w-full max-w-[32rem] p-4 space-y-6">
            {/* logo and brand name for large displays*/}
            <div className="justify-start hidden lg:flex">
                <img src={logo} alt="Logo" className="mb-6 size-14" />
                <h1 className="ms-4 mt-3 font-bold text-2xl">Generic Corp.</h1>
            </div>

            {/* welcome message */}
            <h2 className="text-2xl font-semibold">Nice to see you again</h2>
            <div className="h-0.5 block lg:hidden" />

            {/* login form it self */}
            <form className="space-y-6">

                {/* login fields */}
                <Input
                    title="Login"
                    type="email"
                    name="email"
                    autoComplete="email-new"
                    placeholder="Email or phone number"
                />

                <Input
                    title="Password"
                    type="password"
                    name="password"
                    autoComplete="password-new"
                    placeholder="Enter password"
                />

                {/* remember me toggle and "forgot password?" */}
                <div className="flex items-center justify-between">
                    <Toggle
                        label="Remember me"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                    />
                    <div className="text-sm">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#" className="font-medium text-[#007aff]">
                            Forgot password?
                        </a>
                    </div>
                </div>

                {/* sign in button */}
                <input
                    type="button"
                    className="transition delay-[10ms] cursor-pointer h-11 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-bold text-white bg-[#007aff] hover:bg-[#257fe0de] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007aff]"
                    value="Sign in"
                />
            </form>
            
            <div className="h-1 hidden lg:flex"></div>
            <hr />
            <div className="h-1 hidden lg:flex"></div>

            {/* sign in with google button */}
            <div>
                <button
                    type="button"
                    className="transition delay-[10ms] h-11 w-full inline-flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-base font-medium text-white bg-neutral-700 hover:bg-neutral-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4b4b4b]"
                >
                    <img src={googleLogo} alt="Google Icon" className="mr-2 size-6" />
                    Or sign in with Google
                </button>
            </div>

            {/* create account text */}
            <div className="text-center text-sm">
                <p>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    Don't have an account?<a href="#" className="ms-1 font-medium text-[#007aff] hover:text-[#0062cc]">Sign up now</a>
                </p>
            </div>

            {/* logo and brand name for small displays*/}
            <div className="pt-12 justify-center flex lg:hidden">
                <img src={logo} alt="Logo" className="mb-6 size-14" />
                <h1 className="ms-4 mt-3 font-bold text-2xl">Generic Corp.</h1>
            </div>

        </div>
    );
};

export default Login;
