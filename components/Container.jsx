import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`max-w-352.5 px-2 2xl:px-0 mx-auto relative ${className}`}>
      {children}
    </div>
  );
};

export default Container;
