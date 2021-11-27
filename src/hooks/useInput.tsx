/* eslint-disable prettier/prettier */
import {useState} from 'react';

const useInput = <T extends Object>(initState: T) => {
  const [inputData, setInputData] = useState(initState);

  const onChange = (field: keyof T, value: String) => {
    setInputData({
      ...inputData,
      [field]: value,
    });
  };

  return {
    ...inputData,
    input: inputData,
    onChange,
  };
};

export default useInput;
