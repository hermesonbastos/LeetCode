/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {

  return functions.reduceRight((prev, curr) => {
      return (x) => {
          return curr(prev(x))
      }
  }, (x) => x)
};

/**
* const fn = compose([x => x + 1, x => 2 * x])
* fn(4) // 9
*/