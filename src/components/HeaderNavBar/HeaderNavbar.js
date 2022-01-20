import Logic from "./Logic";

import { useApi } from "../../context/ApiContext";
import { motion, AnimateSharedLayout } from "framer-motion";

import { BsChevronDown } from "react-icons/bs";
import { IconContext } from "react-icons";

const HeaderNavbar = () => {
  const { show, handleShow, handleRoute, headerNavBarAnimation } = Logic();
  const { logOut } = useApi();
  return (
    <div className="h-24">
      <AnimateSharedLayout>
        <motion.div
          layout
          variants={headerNavBarAnimation}
          animate={show ? "open" : "close"}
          initial={false}
          className="w-full flex flex-col items-center p-2 bg-gray-800 text-white"
        >
          {show && (
            <div className="w-full flex justify-around">
              {handleRoute()}
              <button onClick={logOut}>Cerrar Sesion</button>
            </div>
          )}
        </motion.div>
        <motion.div
          layout
          className="bg-gray-800 hard-shadow cursor-pointer flex items-center justify-center"
        >
          <IconContext.Provider value={{ size: 30, color: "white" }}>
            <BsChevronDown onClick={handleShow}></BsChevronDown>
          </IconContext.Provider>
        </motion.div>
      </AnimateSharedLayout>
    </div>
  );
};

export default HeaderNavbar;
