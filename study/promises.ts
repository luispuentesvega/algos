// const promise1 = (val?: string) =>
//   new Promise((resolve, reject) => {
//     if (val) resolve("1");
//     reject("something happened");
//   });

// console.log("Before function"); //1
// (async function() {
//   console.log("Before Promise"); //2
//   const res = await promise1("1");
//   console.log("result:", res); //4
//   console.log("After Promise"); //5
// })();
// console.log("After Function"); //3

const res2 = Promise.allSettled([Promise.resolve(1), Promise.reject(2)]);
res2.then((data) => console.log(data));
