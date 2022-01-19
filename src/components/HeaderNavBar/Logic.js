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

  return { show, handleShow, handleRoute };
};

export default Logic;
