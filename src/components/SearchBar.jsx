import { MagnifyingGlass } from "@phosphor-icons/react";

const SearchBar = () => {
  return (
    <div className="flex items-center w-full rounded-lg border border-gray-300 px-4 py-2 bg-white shadow-sm m-2">
      <input
        type="text"
        placeholder="Search"
        className="w-full focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 rounded-lg bg-transparent px-3 py-2"
      />
      <span className="ml-auto cursor-pointer">
        <MagnifyingGlass
          size={32}
          className="text-gray-500 hover:text-blue-500"
        />
      </span>
    </div>
  );
};

export default SearchBar;
