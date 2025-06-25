import React, { useState } from "react";
import "./SearchField.css";

const SearchField = ({ fetchData }) => {
  const [searchValue, setSearchValue] = useState();

  const handleInput = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = () => {
    fetchData(searchValue);
  };
  return (
    <main>
      <form
        onSubmit={(e) => {
          e.preventDefault(); // prevent page from reloading when enter/return is pressed
          handleSubmit();
        }}
      >
        <input
          className="search-box"
          type="text"
          placeholder="What kind of GIFs are you looking for?"
          //value={searchValue} // probably not needed
          onChange={handleInput}
        />
      </form>
      <button onClick={handleSubmit}>Submit</button>
    </main>
  );
};

export default SearchField;
