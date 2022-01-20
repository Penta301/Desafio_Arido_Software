import { useRef } from "react";
import { useApi } from "../../../../context/ApiContext";

const Logic = () => {
  const { user } = useApi();
  const categories = ["Read", "Write", "Administrator"];
  const userCategoryRef = useRef("Read");
  const userRef = useRef("");

  const whoIsWathching = (usersObject, iteratibeUser) => {
    if (usersObject[user] !== "Owner") {
      return false;
    }

    if (usersObject[iteratibeUser] === "Owner") {
      return false;
    }
    return true;
  };

  const cleanFunction = () => {
    userCategoryRef.current = "Read";
    userRef.current.value = "";
  };

  return {
    categories,
    userCategoryRef,
    userRef,
    cleanFunction,
    whoIsWathching,
  };
};

export default Logic;
