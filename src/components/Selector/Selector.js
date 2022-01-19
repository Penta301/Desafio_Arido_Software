import Logic from "./Logic";

const Selector = ({ arr, refSelector }) => {
  const { handleRef } = Logic();

  return (
    <div className="flex flex-col gap-5 border-2 border-indigo-600 p-2 rounded-2xl">
      {arr.map((option) => (
        <button
          type="button"
          key={option}
          onClick={() => handleRef(refSelector, option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Selector;
