export const pipe = (...funcs) => {
  return function (x) {
    return funcs.reduce(function (acc, func) {
      return func(acc);
    }, x);
  };
}