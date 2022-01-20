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
      return <Link to="/">Casa</Link>;
    }
    return <Link to="/groups">Grupos</Link>;
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
