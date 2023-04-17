import { useEffect, useState } from 'react';

export function useLocalStorage<DataType>(key: string, initialValue: DataType): [DataType, (value: DataType) => void] {
  const getStorageData = async () => {
    const storage = localStorage.getItem(key);
    if (storage) {
      const parsedData = (await JSON.parse(storage)) as DataType;
      setValue(parsedData);
      return;
    }
  };

  const [value, setValue] = useState<DataType>(initialValue);

  const setStorage = (value: DataType) => {
    setValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  useEffect(() => {
    getStorageData();
  }, []);

  return [value, setStorage];
}
