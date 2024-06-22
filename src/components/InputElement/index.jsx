import "./index.css";

const InputElement = (props) => {
  // When user press enter this function gets triggered.
  // Checks if the pressed button is "Enter" and proceed.
  const handleKeyPress = (obj) => {
    if (obj.key == "Enter") {
      props.handleSearch(obj.target.value);
    }
  };

  return (
    <div id="header">
      <input
        value={props.city}
        onKeyUp={(e) => handleKeyPress(e)}
        onChange={(e) => props.handleName(e.target.value)}
        id="input-box"
        placeholder="Enter the city name"
        autoComplete="off"
      />
      <i
        className="fi fi-br-search search-icon"
        onClick={props.handleSearch}
      ></i>
    </div>
  );
};

export default InputElement;
