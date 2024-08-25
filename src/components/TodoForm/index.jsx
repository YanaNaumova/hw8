import React from "react";
import PropTypes from "prop-types";

function TodoForm({ setInputValue, inputValue, addItem }) {
  return (
    <form onSubmit={addItem}>
      <input
        type="text"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        value={inputValue}
      />
      <input type="submit" value="Add todo" />
    </form>
  );
}

TodoForm.propTypes = {
  setInputValue: PropTypes.func,
  inputValue: PropTypes.string,
  addItem: PropTypes.func,
};

export default TodoForm;
