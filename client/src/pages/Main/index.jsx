import ContactList from "../../components/ContactList";
import Sidebar from "../../components/Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useTransition } from "react";
import { getContacts } from "../../services/getContactsService";
import { BsPlusLg } from "react-icons/bs";
import "./main.scss";
import Search from "../../components/Search";

function Main() {
  const navigate = useNavigate();
  const param = useParams();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState(null);
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getAllContacts = () => {
    getContacts()
      .then((res) => res.data)
      .then((data) => {
        setContacts(data);
        setFilteredContacts(data);
      })
      .catch((er) => setError(er.message));
  };

  const handleSearch = ({ target: { value } }) => {
    setSearchValue(value);
    setFilteredContacts(
      contacts.filter((contact) =>
        contact.data.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    startTransition(getAllContacts);
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
  }, [param, contacts]);

  return (
    <div className="main_wrapper">
      <Sidebar />
      <main className="main_main">
        <Search
          className="main_search"
          value={searchValue}
          onChange={handleSearch}
        />
        <button
          className="main_add"
          onClick={() => navigate("./add")}
          type="button"
        >
          <BsPlusLg />
        </button>
        {isPending ? (
          <span className="main_message">loading...</span>
        ) : error ? (
          <span className="main_message">{error}</span>
        ) : (
          <ContactList contacts={filteredContacts} />
        )}
      </main>
    </div>
  );
}

export default Main;
