import TextInput from "../TextInput";
import PropTypes from "prop-types";

import "./contactForm.scss";

function ContactForm({ onChange, onSubmit, onCancel, ...props }) {
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
          value={props.name}
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
          value={props.phone}
          required
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
  name: PropTypes.string,
  phone: PropTypes.string,
};

ContactForm.defaultPops = {
  name: "",
  phone: "",
};
