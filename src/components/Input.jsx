const Input = ({ className, placeholder, value, onChange, onSubmit }) => {
  const handleSubmit = () => {
    onSubmit(value);
  };

  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <input
        type="text"
        className="flex-1 bg-transparent outline-none"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <button
        className="ml-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default Input;
