import { useStateContext } from "../context/contextProvider";

const ColorChanger = () => {
  //const color = "#f3f";
  const { color, setColor } = useStateContext();

  function submitColorHandler(e) {
    e.preventDefault();
    const newColor = e.target.colorInput.value;
    setColor(newColor);
  }

  return (
    <div>
      <h2 className="text-2xl text-center mb-5">Color Changer</h2>
      <div
        className="w-32 h-32  mx-auto"
        style={{ backgroundColor: `${color}` }}
      ></div>
      <form className="flex flex-col my-5" onSubmit={submitColorHandler}>
        <label className="my-2 text-xl" htmlFor="colorInput">
          Inser a new color hex code:
        </label>
        <input
          className="p-2"
          name="colorInput"
          type="text"
          placeholder="ex: #ff0000"
        />
        <button
          className="my-5 p-2 border border-gray-500 rounded-lg cursor-pointer hover:bg-white hover:text-gray-800 active:text-white active:bg-black"
          type="submit"
        >
          Change Color
        </button>
      </form>
    </div>
  );
};

export default ColorChanger;
