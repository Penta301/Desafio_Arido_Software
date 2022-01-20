import { useRef, useState } from "react";

function Logic() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const nameRef = useRef();
  const passRef = useRef();
  const confirmRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passRef.current.value === "") {
      setError("Inserta una contraseña valida");
      return;
    }

    if (passRef.current.value !== confirmRef.current.value) {
      setError("Las contraseñas no coinciden");
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
      localStorage.setItem("user", newBody.name);
      window.location.reload();
    } catch {
      setError("Algo fue mal");
    }
    setLoading(false);
  };

  return { nameRef, passRef, confirmRef, handleSubmit, error, loading };
}

export default Logic;
