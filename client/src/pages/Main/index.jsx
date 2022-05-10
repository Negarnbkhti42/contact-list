import ContactList from "../../components/ContactList";
import Sidebar from "../../components/Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { getContacts } from "../../services/getContactsService";
import "./main.scss";

function Main() {
  const navigate = useNavigate();
  const param = useParams();
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);

  const getAllContacts = () => {
    getContacts()
      .then((res) => res.data)
      .then((data) => {
        setContacts(data);
        setFilteredContacts(data);
      })
      .catch((er) => console.log(er));
  };

  useEffect(() => {
    getAllContacts();
  }, []);

  useEffect(() => {
    let group = param.group;

    if (group === "favorites") {
      setFilteredContacts(contacts.filter((contact) => contact.favorite));
    } else if (group) {
      setFilteredContacts(
        contacts.filter((contact) => contact.group === group)
      );
    } else {
      setFilteredContacts(contacts);
    }
  }, [param]);

  return (
    <div className="main_wrapper">
      <Sidebar />
      <main className="main_main">
        <button onClick={() => navigate("./add")} type="button">
          add
        </button>
        <ContactList contacts={filteredContacts} />
      </main>
    </div>
  );
}

export default Main;
