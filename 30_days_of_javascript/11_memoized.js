function memoize(fn) {
  let called = {};

  return function (...args) {
    let key = String(args);

    if (key in called) {
      return called[key];
    }

    let result = fn(...args);
    called[key] = result;
    return result;
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
memoizedFn(2, 3); // 5
memoizedFn(2, 3); // 5
console.log(callCount); // 1
