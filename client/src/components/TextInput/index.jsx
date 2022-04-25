import "./textInput.scss";
import PropTypes from "prop-types";

function TextInput({ className, ...props }) {
  return (
    <span className={`input ${className}`}>
      <input {...props}></input>
      <span></span>
    </span>
  );
}

export default TextInput;

TextInput.propTypes = {
  className: PropTypes.string,
};

TextInput.defaultProps = {
  className: "",
};
