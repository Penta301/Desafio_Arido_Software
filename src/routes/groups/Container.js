import { useRef, useState } from "react";
import { useApi } from "../../context/ApiContext";
import CreateGroups from "./components/CreateGroups/CreateGroups";
import HeaderNavBar from "../../components/HeaderNavBar/HeaderNavbar";
import ListGroups from "./components/ListGroups/ListGroups";

const Container = () => {
  const { user, groups, setGroups } = useApi();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [layoutIdElement, setLayoutIdElement] = useState("");

  const nameRef = useRef();
  const descRef = useRef();

  const createGroup = (e) => {
    e.preventDefault();
    setLoading(true);
    if (nameRef.current.value === "") {
      setError("Utiliza un nombre valido");
      setLoading(false);
      return;
    }

    const group = {
      desc: descRef.current.value,
      users: { [user]: "Owner" },
      name: nameRef.current.value,
      id: Math.floor(Math.random() * 100),
    };
    const newGroups = [...groups, group];
    setGroups(newGroups);
    nameRef.current.value = "";
    descRef.current.value = "";
    setLoading(false);
    setError("");
  };

  const handleUser = (e, id, user, category, action, cb) => {
    e && e.preventDefault();

    if (user === "") {
      return;
    }

    const group = groups.filter((group) => group.id === id)[0];
    const filteredGroups = groups.filter((group) => group.id !== id);

    switch (action) {
      case "delete":
        delete group.users[user];
        setGroups([...filteredGroups, group]);
        break;
      default:
        group.users[user] = category;
        setGroups([...filteredGroups, group]);
    }

    cb && cb();
  };

  return (
    <>
      <HeaderNavBar></HeaderNavBar>
      <div className="flex w-screen h-4/6 justify-around items-center p-5">
        <CreateGroups
          nameRef={nameRef}
          descRef={descRef}
          groups={groups}
          createGroup={createGroup}
          error={error}
          loading={loading}
        ></CreateGroups>
      </div>
      <div className="bg-gray-800">
        <ListGroups
          layoutIdElement={layoutIdElement}
          setLayoutIdElement={setLayoutIdElement}
          groups={groups}
          handleUser={handleUser}
        ></ListGroups>
      </div>
    </>
  );
};

export default Container;
