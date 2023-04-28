import React from "react";

const Input = ({ placeholder, style, label, name, type = "text" }) => {
  const styles = style?.join(" ");

  return (
    <div>
      <label className={`mt-6 mb-3 block ${!label && "hidden"}`} htmlFor={name}>
        {label}
      </label>
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        id={name}
        className={`border-none outline-none rounded-10 w-full placeholder:text-sm placeholder:text-secondary-300 ${styles}`}
      />
    </div>
  );
};

export default Input;
