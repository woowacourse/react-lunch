export const fetchQuery = async <T,>(
  path: string,
  init?: RequestInit
): Promise<T> => {
  const response = await fetch(path, init);
  const body = await response.json();

  if (!response.ok) throw new Error('Error');

  return body;
};
