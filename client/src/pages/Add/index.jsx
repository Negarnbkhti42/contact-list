import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addContact } from "../../services/addContactService";

function Add() {
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: "",
    email: "",
  });

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    addContact(state);
    navigate("/");
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
      <button type="submit" onClick={handleSubmit}>
        add
      </button>
      <button onClick={() => navigate("/")} type="button">
        cancel
      </button>
    </form>
  );
}

export default Add;
