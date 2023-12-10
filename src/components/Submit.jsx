function Submit(props) {
    return (
      <button
        type="submit"
        className="submit text-black   focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-10/12  px-5 py-2.5 text-center"
      >
        {props.text}
      </button>
    );
  }
  
  export default Submit;
  