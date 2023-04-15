export const pipe =
  (...funcs) =>
  (x, params) =>
    funcs.reduce((acc, f, i) => f(acc, params[i]), x);
