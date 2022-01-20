import Logic from "./Logic";

import { motion } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";
import { IconContext } from "react-icons";

const Selector = ({ arr, refSelector }) => {
  const {
    handleRef,
    openAnimation,
    show,
    handleShow,
    variantsContainer,
    variants,
  } = Logic();

  return (
    <div className="flex flex-col items-center gap-5 border-2 border-indigo-600 p-2 rounded-2xl w-32">
      <motion.div
        variants={openAnimation}
        initial={false}
        animate={show ? "open" : "close"}
        className="h-full"
      >
        <motion.div
          variants={variantsContainer}
          className="flex flex-col items-center h-full gap-2 p-2"
        >
          {arr.map((option) => (
            <motion.button
              type="button"
              disabled={!show}
              variants={variants}
              key={option}
              onClick={() => handleRef(refSelector, option)}
            >
              {option}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
      <IconContext.Provider
        value={{ size: 30, color: "white", className: "z-50 cursor-pointer" }}
      >
        <BsChevronDown onClick={handleShow}></BsChevronDown>
      </IconContext.Provider>
    </div>
  );
};

export default Selector;
