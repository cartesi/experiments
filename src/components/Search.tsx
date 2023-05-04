import React from "react";

type Props = {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clearSearch: () => void;
  searchTerm: string;
};

const Search = ({ handleSearch, clearSearch, searchTerm }: Props) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (!searchTerm) {
      inputRef.current.value = "";
    }
  }, [searchTerm]);

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search projects..."
        onChange={handleSearch}
        className="border w-full border-solid border-slate-300 rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-0 text-slate-900 min-w-[200px] pr-11 appearance-none font-sans text-base"
        ref={inputRef}
      />
      {searchTerm && (
        <button
          type="button"
          onClick={clearSearch}
          className="absolute right-1 top-1 bottom-1 flex items-center justify-center text-slate-400 hover:text-blue-500 focus:outline-none focus:ring-0 bg-white border-0 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            className="fill-current"
          >
            <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
          </svg>
          <span className="sr-only">Clear</span>
        </button>
      )}
    </div>
  );
};

export default Search;
