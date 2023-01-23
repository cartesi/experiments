import React from "react";

type Props = {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clearSearch: () => void;
  searchTerm: string;
};

const Search = ({ handleSearch, clearSearch, searchTerm }: Props) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleClear = () => {
    clearSearch();
    inputRef.current.value = "";
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={handleSearch}
        ref={inputRef}
      />
      {searchTerm && (
        <button type="button" onClick={handleClear}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
