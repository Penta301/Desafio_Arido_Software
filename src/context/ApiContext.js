import React, { useContext, useEffect, useState } from "react";

const ApiContext = React.createContext();

export function useApi() {
  return useContext(ApiContext);
}

export function ApiProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(false);
  const [groups, setGroups] = useState([]);

  const logOut = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(localStorage.getItem("user"));
      setLoading(false);
      return;
    }
    setLoading(false);
  }, []);

  const value = {
    user,
    setUser,
    groups,
    setGroups,
    logOut,
  };

  return (
    <ApiContext.Provider value={value}>
      {!loading && children}
    </ApiContext.Provider>
  );
}
