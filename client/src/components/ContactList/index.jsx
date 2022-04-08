import "./contactList.scss";

function ContactList({ contacts, handleDelete, handleEdit }) {
  return (
    <div className="contactlist_wrapper">
      {contacts.map((contact) => (
        <Contact
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

function Contact({ data, onDelete, onEdit }) {
  return (
    <div className="contact_wrapper">
      <div className="contact_info">
        <p>name: {data.name}</p>
        <p>email: {data.email}</p>
      </div>
      <div className="contact_buttons">
        <button onClick={onEdit} className="btn btn_edit">
          edit
        </button>
        <button onClick={onDelete} className="btn btn_delete">
          delete
        </button>
      </div>
    </div>
  );
}
