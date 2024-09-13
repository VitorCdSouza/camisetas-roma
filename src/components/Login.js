import { useState } from "react";
import Input from "./form/Input";
import Toggle from "./form/Toggle"
import logo from "../assets/Colorful_Sunset-removebg-preview.png"
import googleLogo from "../assets/favpng_google-logo-google-search-icon.png"

const Login = () => {
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <div className="w-full max-w-md p-8 space-y-6">
            {/* logo and brand name */}
            <div className="flex justify-start">
                <img src={logo} alt="Logo" className="mb-6 size-14" />
                <h1 className="ms-4 mt-3 font-bold text-2xl">Generic Corp.</h1>
            </div>

            {/* welcome message */}
            <h2 className="text-2xl font-semibold">Nice to see you again</h2>

            {/* login form it self */}
            <form className="mt-8 space-y-6">

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
                        <a href="#" className="font-medium text-[#007aff] hover:text-[#007aff]">
                            Forgot password?
                        </a>
                    </div>
                </div>

                {/* sign in button */}
                <input
                    type="button"
                    className="h-11 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-bold text-white bg-[#007aff] hover:bg-[#257fe0de] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007aff]"
                    value="Sign in"
                />
            </form>

            {/* sign in with google button */}
            <div>
                <button
                    type="button"
                    className="h-11 mt-12 w-full inline-flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-base font-medium text-white bg-neutral-700 hover:bg-gray-50"
                >
                    <img src={googleLogo} alt="Google Icon" className="mr-2 size-6" />
                    Or sign in with Google
                </button>
            </div>

            {/* create account text */}
            <div className="text-center text-sm">
                <p>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    Don't have an account? <a href="#" className="font-medium text-[#007aff] hover:text-[#0062cc]">Sign up now</a>
                </p>
            </div>

        </div>
    );
};

export default Login;
