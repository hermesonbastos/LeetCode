function memoize(fn) {
  let called = [];

  return function (...args) {

    for(let i = 0; i < called.length; i++) {
      if(called[i].args !== args[i]) {

        console.log(called[i]);
        // return called[i].result;
      }
    }

    const result = fn(...args);
    called.push({ args, result });
    return result;
  };

}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
memoizedFn(2, 3); // 5
memoizedFn(2, 4); // 5
console.log(callCount); // 1
