const Toggle = ({ label, checked, onChange }) => {
    return (
      <label className="flex items-center cursor-pointer">

        {/* checkbox used for toggle and it's props */}
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only" 
        />
        
        {/* transition and small transition */}
        <div className={`relative w-10 h-6 bg-gray-200 rounded-full transition duration-300 ${checked ? "bg-[#007aff]" : ""}`}>
          <div
            className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 transform ${checked ? "translate-x-4" : ""}`}
          ></div>
        </div>
        
        {/* implementing label if any */}
        {label && <span className="ml-3 text-sm font-medium text-gray-900">{label}</span>}
      </label>
    );
  };
  
  export default Toggle;
  