import "./contactList.scss";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

function ContactList({ contacts, handleDelete, handleEdit }) {
  return (
    <div className="contactlist_wrapper">
      {contacts.map((contact) => (
        <ContactItem
          onDelete={() => handleDelete(contact.id)}
          onEdit={() => handleEdit(contact.id)}
          key={contact.id}
          data={contact}
        />
      ))}
    </div>
  );
}

export default ContactList;

function ContactItem({ data, onDelete, onEdit }) {
  return (
    <Link to={`/edit/${data.id}`} className="contactItem_wrapper">
      <FaRegUserCircle className="contactItem_icon" />
      <div className="contactItem_info">
        <p>{data.name}</p>
        <p>{data.email}</p>
      </div>
    </Link>
  );
}
