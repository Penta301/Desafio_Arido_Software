import { useRef, useState } from "react";

function Logic() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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

      localStorage.setItem("user", newBody.name);
      window.location.reload();
    } catch {
      setError("Algo fue mal");
    }
    setLoading(false);
  };

  return { nameRef, passRef, handleSubmit, error, loading };
}

export default Logic;
