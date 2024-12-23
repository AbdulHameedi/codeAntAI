import { SearchButton } from "../../exports";
import useSearchbar from "./useSearchbar";

interface SearchBarProps {
  placeholder: string;
  initialValue: string;
}
const SearchBar = ({placeholder, initialValue}: SearchBarProps) => {
  const {searchValue, handleChange} = useSearchbar(initialValue);
  return (
    <div className="sm:w-[366px] w-full relative pl-10 py-2.5 border-[1.5px] rounded-md">
      <SearchButton className="absolute left-3" />
      <input
        type="text"
        value={searchValue}
        onChange={handleChange}
        placeholder={placeholder}
        className="placeholder:text-base outline-0 text-[#414651] w-full"
      />
    </div>
  );
};

export default SearchBar;
