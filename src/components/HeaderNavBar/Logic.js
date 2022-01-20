import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

const Logic = () => {
  const location = useLocation();

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  const handleRoute = () => {
    if (location.pathname !== "/") {
      return (
        <Link
          className="font-bold hover:text-indigo-600 hover:border-b-2 hover:border-indig-600 transition-colors duration-300 ease-out"
          to="/"
        >
          Casa
        </Link>
      );
    }
    return (
      <Link
        className="font-bold hover:text-indigo-600 hover:border-b-2 hover:border-indig-600 transition-colors duration-300 ease-out"
        to="/groups"
      >
        Grupos
      </Link>
    );
  };

  const headerNavBarAnimation = {
    close: {
      height: "0%",
      transition: {
        type: "spring",
        duration: 1,
        bounce: 0.5,
      },
    },
    open: {
      height: "72%",
      transition: {
        type: "spring",
        duration: 1,
        bounce: 0.5,
      },
    },
  };

  return { show, handleShow, handleRoute, headerNavBarAnimation };
};

export default Logic;
