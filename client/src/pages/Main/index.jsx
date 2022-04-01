import ContactList from "../../components/ContactList";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function Main() {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/contacts")
      .then((res) => res.data)
      .then((data) => setContacts(data))
      .catch((er) => console.log(er));
  }, []);

  return (
    <div className="main_wrapper">
      <button onClick={() => navigate("./add")} className="btn" type="button">
        add
      </button>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default Main;
