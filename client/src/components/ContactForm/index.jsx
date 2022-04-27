import TextInput from "../TextInput";
import PropTypes from "prop-types";

import "./contactForm.scss";

function ContactForm({ onChange, onSubmit, onCancel, data }) {
  return (
    <form className="contactForm_form">
      <div className="contactForm_formfields">
        <label htmlFor="name">name: </label>
        <TextInput
          id="name"
          name="name"
          type="text"
          placeholder="name..."
          onChange={onChange}
          value={data.name}
          required
        />

        <label htmlFor="phone">phone: </label>
        <TextInput
          id="phone"
          name="phone"
          type="tel"
          pattern="(0[1-9][0-9]{9})|(\+[1-9][0-9]{11})"
          placeholder="phone..."
          onChange={onChange}
          value={data.phone}
          required
        />

        <label htmlFor="email">email: </label>
        <TextInput
          id="email"
          name="email"
          type="email"
          placeholder="email..."
          onChange={onChange}
          value={data.email}
        />
      </div>
      <div className="contactForm_buttons">
        <button className="contactForm_addbtn" type="submit" onClick={onSubmit}>
          done
        </button>
        <button
          className="contactForm_cancelbtn"
          onClick={onCancel}
          type="button"
        >
          cancel
        </button>
      </div>
    </form>
  );
}

export default ContactForm;

ContactForm.propTypes = {
  data: PropTypes.shape({}),
  onCancel: PropTypes.func,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

ContactForm.defaultPops = {
  data: {
    name: "",
    phone: "",
  },
  onCancel: null,
  onChange: null,
  onSubmit: null,
};
