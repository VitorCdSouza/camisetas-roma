import Input from "./form/Input";

const Login = () => {
    return (
        <div className="w-full max-w-md p-8 space-y-6">
            {/* logo and brand name */}
            <div className="flex justify-start">
                <img src="https://via.placeholder.com/80" alt="Logo" className="mb-6 size-14" />
                <h1 className="ms-4 mt-3 font-bold text-2xl">Generic Corp</h1>
            </div>

            <h2 className="text-2xl font-semibold">Nice to see you again</h2>

            <form className="mt-8 space-y-6">
                <Input
                    title="Login"
                    type="email"
                    className="w-full px-3 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    name="email"
                    autoComplete="email-new"
                    placeholder="Email or phone number"
                />

                <Input
                    title="Password"
                    type="password"
                    className="w-full px-3 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    name="password"
                    autoComplete="password-new"
                    placeholder="Enter password"
                />

                <input
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    value="Login"
                />
            </form>
        </div>
    );
};

export default Login;
