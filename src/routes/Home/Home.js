import { useApi } from "../../context/ApiContext";
import HeaderNavBar from "../../components/HeaderNavBar/HeaderNavbar";
import "./index.css";

const Home = () => {
  const { groups, user } = useApi();

  return (
    <>
      <HeaderNavBar></HeaderNavBar>
      <div className="w-screen h-screen flex flex-col items-center justify-around">
        <div className="p-5 bg-gray-800 text-white rounded-2xl text-center lg:text-2xl">
          <p className="p-2 border-2 border-indigo-600 rounded-2xl mb-2">
            Hola <span class="text-indigo-600">{user}</span> bienvenido a la APP
            de administracion de grupos, organiza tus grupos con mayor facilidad
            y agiliza tus equipos
          </p>
        </div>
        <div className="container-list-own-groups w-44 border-2 flex flex-col p-5 gap-5 items-center text-white bg-gray-800 rounded-3xl lg:w-3/6">
          <h3 className="border-b-2 border-indigo-600">Eres Owner de: </h3>
          <div className="flex flex-col gap-2">
            {groups.length ? (
              <ol>
                {groups
                  .filter((group) => group.users[user] === "Owner")
                  .map((group, index) => (
                    <li className="uppercase tracking-wide lg:text-2xl">
                      <span className="font-bold text-indigo-600">
                        {index + 1}-{" "}
                      </span>
                      {group.name}
                    </li>
                  ))}
              </ol>
            ) : (
              <p className="border-2 border-indigo-600 text-center rounded-2xl p-2">
                Debes crear grupos para rellenar esta area
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
