import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import DisplayedGroup from "../DisplayedGroup/DisplayedGroup";

const ListGroups = ({
  groups,
  layoutIdElement,
  setLayoutIdElement,
  handleUser,
}) => {
  console.log("ListGroups");
  return (
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence>
        {layoutIdElement &&
          groups
            .filter((group) => group.id === layoutIdElement)
            .map((group) => {
              const { name, desc, id, users } = group;
              return (
                <DisplayedGroup
                  setter={setLayoutIdElement}
                  handleUser={handleUser}
                  key={name}
                  name={name}
                  desc={desc}
                  id={id}
                  users={users}
                ></DisplayedGroup>
              );
            })}
        <div className="w-screen h-screen flex flex-wrap justify-around items-start gap-5 p-5">
          {groups.map((group, index) => {
            const { desc, name, id } = group;
            if (id === layoutIdElement) {
              return null;
            }
            return (
              <motion.div
                layout
                key={name + index}
                layoutId={id}
                onClick={() => setLayoutIdElement(id)}
                className="bg-gray-800 hard-shadow-high-demand cursor-pointer p-5 flex flex-col gap-5 rounded-2xl text-white w-72 border-2 border-indigo-600 hover:text-gray-800 hover:bg-white"
              >
                <h3 className="text-2xl border-b-2 border-indigo-600">
                  {name}
                </h3>
                <p className="text-center">{desc}</p>
              </motion.div>
            );
          })}
        </div>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};

export default ListGroups;
