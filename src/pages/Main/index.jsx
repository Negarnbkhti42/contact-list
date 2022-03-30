import ContactList from "../../components/ContactList";

const contacts = [
  {
    id: 1,
    name: "negar",
    email: "example@gmail.com",
  },
  {
    id: 2,
    name: "ali",
    email: "ali@gmail.com",
  },
];

function Main() {
  return (
    <div className="main_wrapper">
      <button className="btn" type="button">
        add
      </button>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default Main;
