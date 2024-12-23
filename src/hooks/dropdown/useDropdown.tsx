import { useState } from 'react'
const useDropdown = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };    
  return {value, handleChange};  
};

export default useDropdown;
