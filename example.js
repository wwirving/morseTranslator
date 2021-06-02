const myArray = ["red", "blue", "yellow", "green"];

const twoArray = ["one", "two", "three", "four"];

const joinStrings = (inputArray) => {
  return inputArray.join(" ");
};

// how would I console log this string -> 'red/blue/yellow/green'

let myArrayJoined = joinStrings(myArray);

console.log(myArrayJoined);
