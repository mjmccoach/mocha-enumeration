const myNumbers = [1, 2, 3, 4, 5];

// for (const number of myNumbers) {
//   console.log(`This is number ${number}`)
// }

// myNumbers.forEach((number, index) => {
//     console.log(`this is number ${number} of index ${index}`);
// })

const multiplyByTwo = function (myNumbers) { // NEW
  return myNumbers.map((number) => number * 2);
}

const getEvens = function(myNumbers) {
    return myNumbers.filter((number) => number % 2 === 0);
}

const sumElements = function(myNumbers) {
    const total = myNumbers.reduce((runningTotal, number) => {
        runningTotal + number
    }, 0);
    return total;
}

console.log(sumElements(myNumbers));