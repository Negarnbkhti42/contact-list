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

  const [favorite, setFavorite] = useState(false);
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
    updateContact(params.id, { favorite, data: { ...state } })
      .then(() => navigate(-1))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getContact(params.id)
      .then(({ data, favorite }) => {
        setState({ name: data.name, phone: data.phone });
        setFavorite(favorite ?? false);
      })
      .catch((er) => console.log(er));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ContactForm
      data={state}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onCancel={() => navigate(-1)}
    />
  );
}

export default Edit;
