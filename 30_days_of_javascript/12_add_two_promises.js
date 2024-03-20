var addTwoPromises = async function (promise1, promise2) {
  let [a, b] = await Promise.all([promise1, promise2]).then((values) => {
    return values;
  });

  return a + b;
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4
