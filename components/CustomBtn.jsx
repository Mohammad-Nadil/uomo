import React from "react";

const CustomInput = ({
  label = "Label",
  type = "text",
  name,
  value,
  onChange,
  placeholder = "",
  required = false,
  error = "",
  children, // Optional icon or element inside input
  className = "", // Extra Tailwind classes
}) => {
  return (
    <div className={`relative font-sans my-4 w-full ${className}`}>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder || " "}
        required={required}
        className={`peer w-full rounded-[20px] border-2 border-gray-300 bg-transparent px-4 py-3 text-base outline-none
          focus:border-primary transition-all duration-300`}
      />

      <label
        htmlFor={name}
        className={`absolute left-4 top-3 text-gray-500 text-base pointer-events-none
          transition-all duration-300
          peer-placeholder-shown:top-3
          peer-placeholder-shown:text-base
          peer-placeholder-shown:text-gray-500
          peer-focus:-translate-y-1/2
          peer-focus:scale-90
          peer-focus:top-0
          peer-focus:bg-white
          peer-focus:px-2
          capitalize`}
      >
        {label}
      </label>

      {/* Optional children for icons or buttons inside input */}
      {children}

      {/* Error message */}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default CustomInput;
