import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../../components/TextInput";
import { addContact } from "../../services/addContactService";
import "./add.scss";

function Add() {
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: "",
    phone: "",
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
        <TextInput
          id="name"
          name="name"
          type="text"
          placeholder="name..."
          onChange={handleChange}
          value={state.name}
          required
        />
        <label htmlFor="phone">phone: </label>
        <TextInput
          id="phone"
          name="phone"
          type="tel"
          pattern="(0[1-9][0-9]{9})|(\+[1-9][0-9]{11})"
          placeholder="phone..."
          onChange={handleChange}
          value={state.phone}
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
