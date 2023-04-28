const Radio = ({ label, name, id }) => {
  return (
    <>
      <input
        name={name}
        time="radio"
        type="radio"
        id={id}
        className=" radio-input radio-input-after checked:bg-information-300 after:bg-information-500"
      />
      <label className="cursor-pointer" htmlFor={id}>
        {label}
      </label>
    </>
  );
};

export default Radio;
