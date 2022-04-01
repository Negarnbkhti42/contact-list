import ContactList from "../../components/ContactList";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function Main() {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts(localStorage.getItem("contacts") || []);
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
