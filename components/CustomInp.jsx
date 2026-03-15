import React from "react";

const CustomInp = ({
  label = "Label",
  type = "text",
  name,
  value,
  onChange,
  placeholder = "",
  required = false,
  error = "",
  children,
  className = "",
}) => {
  return (
    <div className={`relative w-full ${className}`}>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder=" "
        required={required}
        className={`peer w-full rounded-sm border-2 border-gray-300 bg-transparent px-4 py-3 text-base outline-none
          focus:border-primary transition-all duration-300 ${className}`}
      />

      <label
        htmlFor={name}
        className="absolute left-4 top-3 text-gray-500 text-base pointer-events-none
        transition-all duration-300

        peer-placeholder-shown:top-3
        peer-placeholder-shown:text-base

        peer-focus:top-0
        peer-focus:scale-90
        peer-focus:-translate-y-1/2
        peer-focus:bg-white
        peer-focus:px-2
        peer-focus:text-primary

        peer-not-placeholder-shown:top-0
        peer-not-placeholder-shown:scale-90
        peer-not-placeholder-shown:-translate-y-1/2
        peer-not-placeholder-shown:bg-white
        peer-not-placeholder-shown:px-2
        capitalize"
      >
        {label}
      </label>

      {children}

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default CustomInp;
