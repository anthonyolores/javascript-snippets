const promiseFunc = (b) => {
    return new Promise((resolve, reject) => {
      return b? resolve("promise resolved") : reject("promise rejected");
    });
};
  
//pass true to resolve otherwise false to reject promise
promiseFunc(true)
.then((msg) => {
  console.log(msg)
})
.catch((msg) => {
  console.log(msg)
});

