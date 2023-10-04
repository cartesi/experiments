import React from 'react';
import { TagsAvailable } from '../pages/index';
import { PageFrontMatter } from '../theme/MDXContent/index';

import FilterButton from './FilterButton';

type Props = {
  tags: TagsAvailable[keyof TagsAvailable];
  filterTag: keyof PageFrontMatter['tags'];
  selectedTags: PageFrontMatter['tags'][] | [];
  handleClick: (
    type: keyof TagsAvailable,
    option: PageFrontMatter['tags'][keyof PageFrontMatter['tags']]
  ) => void;
};

const ButtonLabel = ({ label, count }: { label: string; count: number }) => {
  return (
    <div className='flex items-center gap-2 justify-between w-full'>
      {label}

      {count > 0 ? (
        <span className='w-6 h-6 flex items-center justify-center text-xs font-semibold -mr-2 bg-secondary text-secondary-foreground rounded-full'>
          {count}
        </span>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          width='24'
          height='24'
          className='fill-current -mr-2'
        >
          <path fill='none' d='M0 0h24v24H0z' />
          <path d='M12 14l-4-4h8z' />
        </svg>
      )}
    </div>
  );
};

const FilterGroup = ({ tags, filterTag, selectedTags, handleClick }: Props) => {
  const [show, setShow] = React.useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  const countSelected = React.useMemo(() => {
    return selectedTags.filter(tag => tag[filterTag]).length;
  }, [selectedTags, filterTag]);

  const menu = React.useRef<HTMLDivElement>(null);

  const handleOutsideClick = (e: MouseEvent) => {
    if (menu.current && !menu.current.contains(e.target as Node)) {
      setShow(false);
    }
  };

  React.useEffect(() => {
    if (show) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [show]);

  return (
    <div className={`relative ${show ? 'z-50' : ''}`} ref={menu}>
      <FilterButton
        label={<ButtonLabel label={tags.label} count={countSelected} />}
        onClick={handleShow}
        active={show}
      />
      {show && (
        <div className='absolute top-full left-0  bg-popover text-popover-foreground shadow-lg rounded-md p-4 flex flex-col gap-3 max-h-[260px] overflow-auto'>
          {tags.options.map((option, i) => (
            <div key={i} className='flex items-center whitespace-nowrap gap-2'>
              <input
                type='checkbox'
                className='appearance-none checked:bg-primary w-4 h-4 border border-solid border-border focus:ring-2 focus:ring-secondary rounded-sm focus:outline-none focus:text-primary hover:text-primary cursor-pointer'
                id={`${tags.label}-${i}`}
                onChange={() => handleClick(filterTag, option)}
                checked={
                  selectedTags.length > 0 &&
                  selectedTags.some(tag => tag[filterTag] === option)
                }
              />
              <label htmlFor={`${tags.label}-${i}`} className='cursor-pointer'>
                {option}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterGroup;
