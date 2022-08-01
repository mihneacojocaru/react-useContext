import { useStateContext } from "../context/contextProvider";

const Counter = () => {
  const { currentCounter, setCurrentCounter } = useStateContext();

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl text-center mb-5">Increment and decrement</h2>
      <h3 className="border-4 border-sky-500 bg-white text-gray-800 rounded-lg py-1 w-1/3 text-center">
        {currentCounter}
      </h3>
      <div className="grid grid-cols-2 gap-5 my-10 items-center justify-center">
        <button
          className="text-xl border border-gray-500 bg-white text-gray-800 p-5 rounded-lg shadow-xl cursor-pointer hover:text-gray-100 hover:bg-sky-500 active:bg-white active:text-gray-800"
          onClick={() => {
            setCurrentCounter(currentCounter + 1);
          }}
        >
          +
        </button>
        <button
          className="text-xl border border-gray-500 bg-white text-gray-800 p-5 rounded-lg shadow-xl cursor-pointer hover:text-gray-100 hover:bg-orange-400 active:bg-white active:text-gray-800"
          onClick={() => {
            setCurrentCounter(currentCounter - 1);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
