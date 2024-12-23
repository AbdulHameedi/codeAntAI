import { SearchButton } from "../../../exports";

const SearchBar = () => {
  return (
    <div className="w-[366px] relative pl-10 py-2.5 border-[1.5px] rounded-md">
      <SearchButton className="absolute left-3" />
      <input
        type="text"
        placeholder="Search Repositories"
        className="placeholder:text-base outline-0 text-[#414651] w-full"
      />
    </div>
  );
};

export default SearchBar;
