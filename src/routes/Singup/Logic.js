import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useApi } from "../../context/ApiContext";

function Logic() {
  const { postApi } = useApi();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const nameRef = useRef();
  const passRef = useRef();
  const confirmRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passRef.current.value === "") {
      setError("Insert a valid password");
      return;
    }

    if (passRef.current.value !== confirmRef.current.value) {
      setError("Passwords do not match");
      return;
    }

    try {
      setError("");
      setLoading(true);
      const newBody = {
        name: nameRef.current.value,
        password: passRef.current.value,
        state: true,
      };
      await postApi("create_user/", newBody);
      localStorage.setItem("user", newBody.name);
      history.push("/");
    } catch {
      setError("Something went wrong");
    }
    setLoading(false);
  };

  return { nameRef, passRef, confirmRef, handleSubmit, error, loading };
}

export default Logic;
