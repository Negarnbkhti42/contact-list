import "./contactList.scss";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import PropTypes from "prop-types";

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

ContactList.propTypes = {
  contacts: PropTypes.array,
  handleDelete: PropTypes.func,
  handleEdit: PropTypes.func,
};

ContactList.defaultProps = {
  contacts: [],
  handleDelete: null,
  handleEdit: null,
};

export default ContactList;

function ContactItem({ data, onDelete, onEdit }) {
  return (
    <Link to={`/edit/${data.id}`} className="contactItem_wrapper">
      <FaRegUserCircle className="contactItem_icon" />
      <div className="contactItem_info">
        <p className="contactItem_info-name">{data.name}</p>
        <p className="contactItem_info-phone">{data.phone}</p>
      </div>
    </Link>
  );
}
