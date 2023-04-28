import React from "react";

const Checkbox = ({ name, label, value, onchange, checked }) => {
  return (
    <label className="cursor-pointer py-1.5 block " htmlFor={name}>
      <input
        checked={checked}
        value={value}
        onChange={onchange}
        name={name}
        id={name}
        type="checkbox"
        className="rounded-md w-5 h-5 mr-2 border-secondary-300 form-checkbox"
      />
      {label}
    </label>
  );
};

export default Checkbox;
