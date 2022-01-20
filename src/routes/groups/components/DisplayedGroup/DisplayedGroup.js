import Selector from "../../../../components/Selector/Selector";
import Logic from "./Logic";

import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons";

const DisplayedGroup = ({ name, id, desc, users, setter, handleUser }) => {
  const {
    categories,
    userCategoryRef,
    userRef,
    cleanFunction,
    whoIsWathching,
  } = Logic();

  return (
    <motion.div className="fixed top-0 left-0 z-50 min-h-screen w-screen flex items-center justify-center p-5">
      <motion.div
        layoutId={id}
        layout
        className="bg-gray-800 text-white border-2 border-indigo-600 p-5 rounded-2xl flex flex-col gap-5 w-full max-h-screen lg:w-4/6"
      >
        <div className="border-b-2 border-indigo-600 w-full">
          <div className="w-full flex justify-between">
            <h2>El nombre del grupo es: {name}</h2>
            <IconContext.Provider
              value={{
                size: 30,
                className:
                  "text-white cursor-pointer hover:text-indigo-600 transition-colors duration-300 ease-out",
              }}
            >
              <AiOutlineClose onClick={() => setter("")}></AiOutlineClose>
            </IconContext.Provider>
          </div>
          <p>Descripcion: {desc}</p>
        </div>
        <div>
          <div className="flex flex-col w-full justify-around border-2 border-indigo-600 rounded-3xl py-2">
            <div className="flex justify-around items-center border-b-2 border-indigo-600 overflow-y-scroll">
              <h3 className="font-bold text-2xl">Usuarios</h3>
              <h3 className="font-bold text-2xl">Categoria</h3>
            </div>
            <div className="max-h-20 overflow-y-scroll lg:max-h-48">
              {Object.keys(users).map((user, index) => {
                return (
                  <div
                    key={user + index}
                    className="flex w-full justify-around p-2"
                  >
                    <h3>{user}</h3>
                    <div className="flex gap-5">
                      <h3>{users[user]}</h3>
                      {whoIsWathching(users, user) && (
                        <button
                          onClick={() =>
                            handleUser(null, id, user, "", "delete")
                          }
                        >
                          x
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {whoIsWathching(users, null) && (
            <form
              onSubmit={(e) =>
                handleUser(
                  e,
                  id,
                  userRef.current.value,
                  userCategoryRef.current,
                  "",
                  cleanFunction
                )
              }
              className="flex flex-col justify-around items-center gap-5 p-5 lg:flex-row"
            >
              <input
                className="bg-transparent p-2 border-2 border-indigo-600 rounded-3xl  outline-none"
                type="text"
                placeholder="Inserta usuario para crear/editar"
                ref={userRef}
              />
              <Selector
                arr={categories}
                refSelector={userCategoryRef}
              ></Selector>
              <button
                type="submit"
                className="z-50 border-2 border-indigo-600 rounded-2xl p-2  hover:text-indigo-600 transition-colors duration-300 ease-out"
              >
                Crear
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DisplayedGroup;
