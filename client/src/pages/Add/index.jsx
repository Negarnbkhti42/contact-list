import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addContact } from "../../services/addContactService";
import "./add.scss";

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
      <div className="add_formfields">
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
      </div>
      <div className="add_buttons">
        <button className="add_addbtn" type="submit" onClick={handleSubmit}>
          add
        </button>
        <button
          className="add_cancelbtn"
          onClick={() => navigate("/")}
          type="button"
        >
          cancel
        </button>
      </div>
    </form>
  );
}

export default Add;
