import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";

const Input = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  // show password
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <label htmlFor={props.name} className="ms-3 block text-sm font-medium text-gray-700">
        {props.title}
      </label>
      <input
        type={props.type === "password" && showPassword ? "text" : props.type}
        className={props.className + " mt-1 w-full h-12 px-3 py-2 border rounded-md sm:text-sm"}
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
        autoComplete={props.autoComplete}
        value={props.value}
      />

      {props.type === "password" && (
        <div
          className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <EyeOffIcon className="mt-5 h-5 w-5 text-gray-500" />
          ) : (
            <EyeIcon className="mt-5 h-5 w-5 text-gray-500" />
          )}
        </div>
      )}
    </div>
  );
};

export default Input;
