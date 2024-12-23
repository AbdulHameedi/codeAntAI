import { DropdownArrow } from "../../exports";
import useDropdown from "./useDropdown";

interface DropdownProps {
  options: string[];
  initialValue: string;
}
const Dropdown = ({ options, initialValue }: DropdownProps) => {
  const { value, handleChange } = useDropdown(initialValue);
  return (
    <div className="mb-4 relative">
      <select
        name=""
        value={value}
        onChange={handleChange}
        id=""
        className="border-[1.5px] w-full rounded-md p-3 appearance-none outline-0 text-ellipsis text-[#181D27]"
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <DropdownArrow className="absolute right-3 top-5" />
    </div>
  );
};

export default Dropdown;
