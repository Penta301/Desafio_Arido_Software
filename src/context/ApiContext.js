import React, { useContext, useEffect, useState, useMemo } from "react";
import axios from "axios";

const ApiContext = React.createContext();

export function useApi() {
  return useContext(ApiContext);
}

export function ApiProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(false);

  const api = useMemo(() => {
    return axios.create({
      baseURL: "http://127.0.0.1:8000/api/",
    });
  }, []);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(localStorage.getItem("user"));
      setLoading(false);
      return;
    }
    setLoading(false);
  }, []);

  const getApi = async (endPoint) => {
    try {
      const { data } = await api.get(endPoint);
      return data;
    } catch (error) {
      return error;
    }
  };

  const postApi = async (endPoint, body) => {
    try {
      const { data } = await api.post(endPoint, body);
      return data;
    } catch (error) {
      return error;
    }
  };

  const deleteApi = async (endPoint, body) => {
    try {
      const { data } = await api.delete(endPoint, body);
      return data;
    } catch (error) {
      return error;
    }
  };

  const putApi = async (endPoint, body) => {
    try {
      const { data } = await api.put(endPoint, body);
      return data;
    } catch (error) {
      return error;
    }
  };

  const value = {
    user,
    setUser,
    getApi,
    postApi,
    deleteApi,
    putApi,
  };

  return (
    <ApiContext.Provider value={value}>
      {!loading && children}
    </ApiContext.Provider>
  );
}
