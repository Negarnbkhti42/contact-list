import "./textInput.scss";

function TextInput({ className, ...props }) {
  return (
    <span className={`input ${className}`}>
      <input {...props}></input>
    </span>
  );
}

export default TextInput;
