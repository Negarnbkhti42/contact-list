import ContactList from "../../components/ContactList";
import Sidebar from "../../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { getContacts } from "../../services/getContactsService";
import "./main.scss";
import { deleteContact } from "../../services/deleteContactService";

function Main() {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);

  const getAllContacts = () => {
    getContacts()
      .then((res) => res.data)
      .then((data) => setContacts(data))
      .catch((er) => console.log(er));
  };

  useEffect(() => {
    getAllContacts();
  }, []);

  const handleDelete = (id) => {
    deleteContact(id).then((res) => {
      getAllContacts();
    });
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="main_wrapper">
      <Sidebar />
      <main className="main_main">
        <button onClick={() => navigate("./add")} type="button">
          add
        </button>
        <ContactList
          contacts={contacts}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </main>
    </div>
  );
}

export default Main;
