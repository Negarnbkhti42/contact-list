import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    console.log(state);
  }, [state]);

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  return (
    <form className="add_form">
      <label htmlFor="name">name: </label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="name..."
        onChange={handleChange}
        value={state.name}
        required
      />
      <label htmlFor="email">email: </label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="email..."
        onChange={handleChange}
        value={state.email}
        required
      />
      <button type="submit">add</button>
      <button onClick={() => navigate(-1, { replace: true })} type="button">
        cancel
      </button>
    </form>
  );
}

export default Add;
