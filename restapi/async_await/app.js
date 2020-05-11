// Brad says this is not the best example

// async function myFunc() {
//   //   return 'Hello';

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello'), 1000);
//   });

//   const error = false;

//   if (!error) {
//     const res = await promise; // Wait until promise is resolved
//     return res;
//   } else {
//     await Promise.reject(new Error('Something has gone wrong'));
//   }
// }

// myFunc()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

//
// He says that using with fetch is the best case to use async await

async function getUsers() {
  // Await response of the fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  // Only proceed once the promise is resolved
  const data = await response.json();

  // Only proceed once the second promise is resolved
  return data;
}

getUsers().then(users => console.log(users));
