function ContactList({ contacts }) {
  return (
    <div>
      {contacts.map((contact) => (
        <Contact key={contact.id} data={contact} />
      ))}
    </div>
  );
}

export default ContactList;

function Contact({ data }) {
  return (
    <div>
      <span>
        <p>name: {data.name}</p>
        <p>email: {data.email}</p>
      </span>
      <button>delete</button>
    </div>
  );
}
