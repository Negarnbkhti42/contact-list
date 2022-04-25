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
    phone: "",
  });

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
    updateContact(params.id, state)
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getContact(params.id)
      .then((res) => {
        setState({ name: res.name, phone: res.phone });
      })
      .catch((er) => console.log(er));
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
