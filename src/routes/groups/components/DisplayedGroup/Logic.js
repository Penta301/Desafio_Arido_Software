import { useRef } from "react";

const Logic = () => {
  const categories = ["Read", "Write", "Administrator"];
  const userCategoryRef = useRef("Read");
  const userRef = useRef("");

  const cleanFunction = () => {
    userCategoryRef.current = "Read";
    userRef.current.value = "";
  };

  return { categories, userCategoryRef, userRef, cleanFunction };
};

export default Logic;
