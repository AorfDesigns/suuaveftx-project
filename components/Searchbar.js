'use client'
import { Input } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { SearchIcon } from './SearchIcon';


const SearchBar = () => {
  return (
    <div className="w-full ml-40 rounded-full px-4 py-2">
      {/* Custom Search Icon */}
     
      {/* Input Field */}
      <Input
          classNames={{
            base: "w-[600px] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "w-full h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20 rounded-full px-6 py-6",
          }}
          placeholder="Search jobs..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
    </div>
  );
};

export default SearchBar;
