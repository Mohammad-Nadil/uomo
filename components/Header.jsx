import React from "react";

const Header = ({ text }) => {
  const words = text.split(" ");
  const lastWord = words.pop();
  const restText = words.join(" ");

  return (
    <h1 className="text-4xl text-primary">
      <span className="font-light">{restText} </span>
      <span className="font-bold">{lastWord}</span>
    </h1>
  );
};

export default Header;
