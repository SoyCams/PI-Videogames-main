/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { getGameByNameApi } from "../../Redux/Actions";
import { connect } from "react-redux";

const SearchBar = (props) => {
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = () => {
    props.getGameByNameApi(name);
    setName("");
  };
  return (
    <div>
      <input type="text" onChange={handleChange} value={name} />
      <button onClick={handleClick}>Search</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGameByNameApi: (name) => dispatch(getGameByNameApi(name)),
  };
};

export default connect(null, mapDispatchToProps)(SearchBar);
