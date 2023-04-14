export const LocalStorage = {
  setData<T>(key: string, data: T) {
    localStorage.setItem(key, JSON.stringify(data));
  },

  getData(key: string) {
    const item = localStorage.getItem(key);

    if (!item) return null;

    return JSON.parse(item);
  },
};
