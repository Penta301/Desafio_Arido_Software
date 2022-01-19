import Logic from "./Logic";
import { Link } from "react-router-dom";

const HeaderNavbar = () => {
  const { show, handleShow, handleRoute } = Logic();
  return (
    <div className="w-full hard-shadow flex justify-around p-2 bg-gray-800 text-white">
      {show ? (
        <div className="w-full flex justify-around gap-5">
          {handleRoute()}
          <Link to="/Profile">Perfil</Link>
          <button onClick={handleShow}>Close</button>
        </div>
      ) : (
        <button onClick={handleShow}>Open</button>
      )}
    </div>
  );
};

export default HeaderNavbar;
