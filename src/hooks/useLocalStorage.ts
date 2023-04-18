import { useState } from 'react';

const useLocalStorage = (key, initValue) => {
  const rawData = localStorage.getItem(key) ?? initValue;
  const [value, setValue] = useState(() => {
    let data;
    try {
      data = JSON.parse(rawData);
    } catch (err) {
      data = rawData;
    }

    return data;
  });

  const setStorage = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(() => newValue);
  };

  return [value, setStorage];
};

export default useLocalStorage;
