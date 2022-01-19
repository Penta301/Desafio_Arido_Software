import Selector from "../../../../components/Selector/Selector";
import Logic from "./Logic";

import { motion } from "framer-motion";
import { AiOutlineUserAdd } from "react-icons/ai";
import { IconContext } from "react-icons";

const DisplayedGroup = ({ name, id, desc, users, setter, handleUser }) => {
  const { categories, userCategoryRef, userRef, cleanFunction } = Logic();

  return (
    <motion.div
      layoutId={id}
      layout
      className="fixed top-0 left-0 z-50 h-screen w-screen flex items-center justify-center p-5"
    >
      <motion.div className="bg-gray-800 text-white border-2 border-indigo-600 p-5 rounded-2xl flex flex-col gap-5 w-full lg:w-4/6">
        <div className="border-b-2 border-indigo-600 w-full">
          <div className="w-full flex justify-between">
            <h2>El nombre del grupo es: {name}</h2>
            <button onClick={() => setter("")}>X</button>
          </div>
          <p>Descripcion: {desc}</p>
        </div>
        <div>
          <div className="flex flex-col w-full justify-around border-2 border-indigo-600 rounded-3xl py-2">
            <div className="flex justify-around items-center border-b-2 border-indigo-600">
              <h3 className="font-bold text-2xl">Usuarios</h3>
              <h3 className="font-bold text-2xl">Categoria</h3>
            </div>
            {Object.keys(users).map((user, index) => {
              return (
                <div
                  key={user + index}
                  className="flex w-full justify-around p-2"
                >
                  <h3>{user}</h3>
                  <div className="flex gap-5">
                    <h3>{users[user]}</h3>
                    {users[user] === "Owner" || (
                      <button
                        onClick={() => handleUser(null, id, user, "", "delete")}
                      >
                        x
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
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
              className="bg-transparent border-2 border-indigo-600 rounded-3xl px-2 outline-none"
              type="text"
              placeholder="Nombre del usuario"
              ref={userRef}
            />
            <Selector arr={categories} refSelector={userCategoryRef}></Selector>
            <button type="submit">Crear</button>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DisplayedGroup;
