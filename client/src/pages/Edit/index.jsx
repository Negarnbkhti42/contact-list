import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TextInput from "../../components/TextInput";
import { getContact } from "../../services/getContactService";
import { updateContact } from "../../services/updateContactService";
import "./edit.scss";

function Edit() {
  const navigate = useNavigate();
  const params = useParams();
  const [state, setState] = useState({
    name: "",
    email: "",
  });

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    updateContact(params.id, state)
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getContact(params.id)
      .then((res) => {
        setState({ name: res.name, email: res.email });
      })
      .catch((er) => console.log(er));
  }, []);

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
        <label htmlFor="email">email: </label>
        <TextInput
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
          edit
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

export default Edit;
