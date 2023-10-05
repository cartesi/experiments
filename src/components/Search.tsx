import { Cross, SearchIcon, X } from 'lucide-react';
import React from 'react';

type Props = {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clearSearch: () => void;
  searchTerm: string;
};

const Search = ({ handleSearch, clearSearch, searchTerm }: Props) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (!searchTerm) {
      inputRef.current.value = '';
    }
  }, [searchTerm]);

  return (
    <div className='relative'>
      <input
        type='text'
        placeholder='Search projects...'
        onChange={handleSearch}
        className='border w-full focus:border-secondary border-solid border-input rounded-md px-3 py-2 bg-background focus:outline-none focus:ring-0 text-foreground min-w-[200px] pr-11 appearance-none font-sans text-base'
        ref={inputRef}
      />
      {searchTerm ? (
        <button
          type='button'
          onClick={clearSearch}
          className='absolute px-1 right-1 top-1 bottom-1 flex items-center justify-center text-muted-foreground hover:text-primary focus:outline-none focus:ring-0 bg-background border-0 cursor-pointer'
        >
          <X className='w-4 h-4' />
          <span className='sr-only'>Clear Search</span>
        </button>
      ) : (
        <span className='absolute px-1 right-1 top-1 bottom-1 flex items-center justify-center text-muted-foreground hover:text-primary bg-background pointer-events-none'>
          <SearchIcon className='w-4 h-4' />
          <span className='sr-only'>Search</span>
        </span>
      )}
    </div>
  );
};

export default Search;
