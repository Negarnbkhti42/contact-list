import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ContactForm from "../../components/ContactForm";
import { getContact } from "../../services/getContactService";
import { updateContact } from "../../services/updateContactService";
import "./edit.scss";

function Edit() {
  const navigate = useNavigate();
  const params = useParams();

  const [state, setState] = useState({
    name: "",
    phone: "",
    email: "",
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
    <ContactForm
      data={state}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onCancel={() => navigate("/")}
    />
  );
}

export default Edit;
