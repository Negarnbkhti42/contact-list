import TextInput from "../TextInput";
import { FiSearch } from "react-icons/fi";

import "./search.scss";

function Search({ value, onChange }) {
  return (
    <div className="searchbar">
      <FiSearch className="searchbar_icon" />
      <TextInput
        className="searchbar_input"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Search;
