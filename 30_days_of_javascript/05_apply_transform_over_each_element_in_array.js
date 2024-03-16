/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
  let aux = [];
  for(let i = 0; i < arr.length; i++) {
      aux.push(fn(arr[i], i));
  }
  return aux;
};