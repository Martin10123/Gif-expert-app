import { useState } from "react";
import PropTypes from 'prop-types'

export const AddCategories = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length <= 1) return;

    onNewCategory( inputValue.trim() )
    setInputValue("");
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs..."
        value={inputValue}
        onChange={handleOnChange}
      />
    </form>
  );
};

AddCategories.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}