import { useState } from "react";
const useSearchbar = (initialValue="",placeholder="") => {
    const [searchValue, setSearchValue] = useState(initialValue);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setSearchValue(event.target.value);
    }
  return {searchValue, handleChange,placeholder}
}

export default useSearchbar