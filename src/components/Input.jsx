import "../styles/destination.css";

function Input(props) {
  return (
    <div className="">
      <div className="mb-6">
        <label
          htmlFor={props.id}
          className=" mb-2 text-sm font-medium text-gray-900 dark:text-white max-[639px]:w-11/12 sm:w-10/12 flex justify-start"
        >
        {props.label}
        </label>
        <input
          type={props.type}
          id={props.id}
          name={props.name}
          value={props.value}
          className="child bg-gray-50 border border-gray-300 text-sm rounded-lg block max-[639px]:w-11/12 sm:w-10/12 p-2.5"
          placeholder={props.placeholder}
          required
          autoComplete='off'
          onChange={props.change}
          onBlur ={props.blur}
        />
        {props.error ? <span className="error">{props.errormsg}</span>:""}
      </div>
    </div>
  );
}

export default Input;
