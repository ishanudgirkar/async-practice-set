//Q1 Write a function ‘delayedGreeting’ that consoles a greeting message after a delay of 2 seconds using setTimeout. 
//You can practice this question in any JS editor or your browser console.

// const delayedGreeting = () => setTimeout(() => console.log(`Hello, welcome to my portfolio!`),2000)


//Q2 Write a function ‘delayedAddition’ that takes in two numbers and consoles their sum after a delay of 4 seconds
// using setTimeout. You can practice this question in any JS editor or your browser console.

// const delayedAddition = (a,b) => setTimeout(() => console.log(a + b), 4000)

// delayedAddition(2, 3); 

//Q3* Write a function ‘delayAlert’ that takes in a message ‘Hello, world!’ and a delay time in milliseconds, 
//and displays the message in an alert box after the specified delay time using setTimeout. 
//You can practice this question in any JS editor or your browser console.

// const delayedAlert = (msg, delay) => setTimeout(() => alert(`${msg}`),delay)

// delayedAlert('Hello, world!', 2000);


//Q4* Write a function delayedLoop that takes a number 3 and consoles a message 'Hello' three times after a delay of 1 second 
//each, using a for-loop and setTimeout. You can practice this question in any JS editor or your browser console.


// const delayedLoop = num => 
// setTimeout(() => for(let i = 0 ; i <=num ;i++){
//     console.log(`Hello`);
// },1000)

// const delayedLoop = num => {
//     for(let i = 1 ; i <= num ; i++){
//        setTimeout(() => console.log(`Hello`,i),1000*i)
//     }
// }

// delayedLoop(3);

//Q5* Make a fake fetch call that takes a message and a boolean value to get data and console the message
// received from the server. A fake fetch has been provided. You can practice this question in any JS editor or 
//your browser console.

// const output = document.querySelector('#outputQ5');

// const fakeFetch = (msg, shouldSucceed) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (shouldSucceed) {
//           resolve(`message from server: ${msg}`);
//         }
//         reject(`error from server: ${msg}`);
//       }, 3000);
//     });
//   };

//  fakeFetch(`Ishan here !`,0).then(res => console.log(res)).catch(err => console.log(err));

//Q7 Use this URL - https://example.com/api/chat to make a fake fetch call and handle errors if any.
// Show a proper message to the user on the DOM, as per the status and message received from the server.
// A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question. 

// const output7 = document.querySelector('#outputQ7');

// const fakeFetch = (url) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (url === "https://example.com/api/chat") {
//           reject({
//             status: 503,
//           message: "Service Unavailable"
//         });
//       } else {
//           resolve({
//             status: 200,
//           data: {
//               message: "Success"
//           }
//         });
//       }
//     }, 2000);
//   });
//   };

//   fakeFetch(`https://example.com/api/chat`)
//   .then(res => res.data.message)
//   .then(ans => output7.innerText = `${ans}`) 
//   .catch(err => {
//     if(err.status === 503){
//         output7.innerText = `We are facing high demand at the moment. Please check back later in sometime.`
//     } 
// })
 
//Q8* Use this URL - https://example.com/api/itemlist to make a fake fetch call and list out all the items as an ordered
// list on the DOM. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for 
//this question.

// const output8 = document.querySelector('#outputQ8');

// const fakeFetch = (url) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (url === "https://example.com/api/itemlist") {
//           resolve({
//             status: 200,
//             message: "Success",
//             data: [
//               { itemName: "Bread", price: 30, quantity: 10 },
//               { itemName: "Water Bottle", price: 50, quantity: 50 },
//               { itemName: "Dairy Milk", price: 20, quantity: 30 }
//             ]
//           });
//         } else {
//           reject({
//             status: 404,
//             message: "Items list not found."
//           });
//         }
//       }, 2000);
//     });
//   };


//   fakeFetch(`https://example.com/api/itemlist`)
//   .then(res => {
//     for(let i = 0; i < res.data.length; i++){
//         output8.innerHTML += `<ol><li>${res.data[i].itemName} ---INR ${res.data[i].price} --- ${res.data[i].quantity}</ol></li>`
//     }})


  






//Q9 Use this URL - https://example.com/api/data to make a fake fetch call and handle errors if any. 
//Show a proper message to the user on the DOM, as per the status and message received from the server.
// A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

// const output9 =  document.querySelector('#outputQ9');

// const fakeFetch = (url) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (url === "https://example.com/api/data") {
//           reject({
//             status: 500,
//           message: "Internal Server Error"
//         });
//       } else {
//           resolve({
//             status: 200,
//           data: {
//               message: "Success"
//           }
//         });
//       }
//     }, 2000);
//   });
//   };


//     fakeFetch(`https://example.com/api/data`)
//   .then(res => res.data.message) 
//   .catch(err => {
//     if(err.status === 500){
//         output9.innerText = `Internal Server Error! The server crashed. Please try again in some time.`
//     } 
// })


//Q10 Use this URL - https://example.com/api/profile to make a fake fetch call and handle errors if any. 
//Show a proper message to the user on the DOM, as per the status and message received from the server. 
//A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

// const output10 =  document.querySelector('#outputQ10');

// const fakeFetch = (url) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (url === "https://example.com/api/profile") {
//           reject({
//             status: 401,
//             message: "Unauthorized Access"
//           });
//         } else {
//           resolve({
//             status: 200,
//             data: {
//               message: "Success"
//             }
//           });
//         }
//       }, 2000);
//     });
//   };

//       fakeFetch(`https://example.com/api/profile`)
//   .then(res => res.data.message) 
//   .catch(err => {
//     if(err.status === 401){
//         output10.innerText = `Unauthorized Access! Looks like you are not logged in. Please login to see your profile data.`
//     } 
// })

//Q11 Use this URL - https://example.com/api/profile/NC002 in which we are passing the id of a user to make a fake fetch call
// and display a welcome message to the user on the DOM. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or 
//Vanilla template in CodeSandbox for this question.

const output11 = document.querySelector(`#outputQ11`);

const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/profile/NC002") {
          resolve({
            status: 200,
            data: {
              message: "Success",
              data: { id: "NC002", name: "Roshan", institute: "neoG Camp" }
            }
          });
        } else {
          reject({
            status: 404,
            message: "Resource not found"
          });
        }
      }, 2000);
    });
  };


  fakeFetch(`https://example.com/api/profile/NC002`)
  .then(res => output11.innerText = `Welcome! , ${res.data.data.name} from ${res.data.data.institute}`)
  .catch(err =>output11.innerText = `Error: ${err.message}`)

  


  








