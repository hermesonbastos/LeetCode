async function sleep(millis) {
  return new Promise((resolve) => setTimeout(() => resolve(21), millis));
}
 
let t = Date.now()
sleep(100).then(() => console.log(Date.now() - t)) // 100
