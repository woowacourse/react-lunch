interface typeCheckProps<T> {
  data: unknown;
  initialData?: T;
}

const typeCheck = <T>(value: unknown): value is T => {
  return typeof value === typeof (<T>{});
};

export const typePredicates = <T>({ data, initialData }: typeCheckProps<T>): T => {
  if (!typeCheck<T>(data) || data === null || data === undefined) {
    if (initialData !== undefined) return initialData;
    throw new Error('data is null');
  }

  return data;
};
