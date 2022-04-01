import { useState } from "react";

function Add() {
  const [state, setState] = useState({
    name: "",
    email: "",
  });

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
        required
      />
      <label htmlFor="email">email: </label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="email..."
        onChange={handleChange}
        required
      />
      <button type="submit">add</button>
      <button type="button">cancel</button>
    </form>
  );
}

export default Add;
