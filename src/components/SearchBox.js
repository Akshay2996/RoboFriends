import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 tc ba b--green bg-lightest-blue br3"
        type="search"
        placeholder="Search Robots..."
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
