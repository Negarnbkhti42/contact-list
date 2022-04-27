import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactForm from "../../components/ContactForm";
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
    <ContactForm
      onChange={handleChange}
      onSubmit={handleSubmit}
      onCancel={() => navigate("/")}
    />
  );
}

export default Add;
