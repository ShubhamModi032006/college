// let cache = {};

// const calc = (n) => {
//     let sum = 0;
//     for (let i = 0; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// };

// const memo1 = (calc) => {
//     return function (n) {
//         if (n in cache) {
//             console.log('from cache');
//             return cache[n];
//         } else {
//             const start = performance.now();
           
//             const result = calc(n);
//             cache[n] = result;
//             const end = performance.now();

//             console.log("time taken =", (end - start), "ms");
//             return result;
//         }
//     }
// };

// const mem = memo1(calc);
// console.log(mem(20));
// console.log(mem(20));    // second time comes from cache







