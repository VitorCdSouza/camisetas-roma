import { useState } from "react";
import Input from "./form/Input";
import Toggle from "./form/Toggle"

const Login = () => {
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <div className="w-full max-w-md p-8 space-y-6">
            {/* logo and brand name */}
            <div className="flex justify-start">
                <img src="https://via.placeholder.com/80" alt="Logo" className="mb-6 size-14" />
                <h1 className="ms-4 mt-3 font-bold text-2xl">Generic Corp</h1>
            </div>

            {/* welcome message */}
            <h2 className="text-2xl font-semibold">Nice to see you again</h2>

            {/* login form it self */}
            <form className="mt-8 space-y-6">
                <Input
                    title="Login"
                    type="email"
                    className=""
                    name="email"
                    autoComplete="email-new"
                    placeholder="Email or phone number"
                />

                <Input
                    title="Password"
                    type="password"
                    className=""
                    name="password"
                    autoComplete="password-new"
                    placeholder="Enter password"
                />

                <div className="flex items-center justify-between">
                    <Toggle
                        label="Remember me"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                    />
                    <div className="text-sm">
                        <a href="#" className="font-medium text-[#007aff] hover:text-[#007aff]">
                            Forgot password?
                        </a>
                    </div>
                </div>

                <input
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-[#007aff] hover:bg-[#007aff] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007aff]"
                    value="Sign in"
                />

                <div className="mt-4">
                    <button
                        type="button"
                        className="w-full inline-flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                        <img src="https://via.placeholder.com/20" alt="Google Icon" className="mr-2" />
                        Or sign in with Google
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
