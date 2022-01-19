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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passRef.current.value === "") {
      setError("Insert a valid password");
      return;
    }

    try {
      setError("");
      setLoading(true);
      const newBody = {
        name: nameRef.current.value,
        password: passRef.current.value,
      };
      const data = await postApi("get_user/", newBody);

      if (data) {
        localStorage.setItem("user", newBody.name);
        history.push("/");
      }
    } catch {
      setError("Something went wrong");
    }
    setLoading(false);
  };

  return { nameRef, passRef, handleSubmit, error, loading };
}

export default Logic;
