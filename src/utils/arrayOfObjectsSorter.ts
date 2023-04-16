type Sortable = string | number | Date;

export const sortAlphabetically = <T extends Record<string, Sortable>>(
  array: T[],
  prop: keyof T,
  language: string = "ko-KR"
) => {
  return [...array].sort((a, b) =>
    String(a[prop]).localeCompare(String(b[prop]), language)
  );
};

export const sortAscending = <T extends Record<string, Sortable>>(
  array: T[],
  prop: keyof T
) => {
  return [...array].sort((a, b) => Number(a[prop]) - Number(b[prop]));
};

export const sortDescending = <T extends Record<string, Sortable>>(
  array: T[],
  prop: keyof T
) => {
  return [...array].sort((a, b) => Number(b[prop]) - Number(a[prop]));
};
