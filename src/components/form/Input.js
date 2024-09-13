const Input = (props) => {
    return (
        <div className="mb-5">
            <label htmlFor={props.name} className="ms-3 block text-sm font-medium text-gray-700">
                {props.title}
            </label>
            <input
                type={props.type}
                className={props.className}
                id={props.name}
                name={props.name}
                placeholder={props.placeholder}
                autoComplete={props.autoComplete}
                value={props.value}
            />
            {props.errorMsg && (
                <div className="text-red-600 text-sm mt-1">{props.errorMsg}</div>
            )}
        </div>
    );
};

export default Input;
