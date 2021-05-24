import {
  makeMorseSentence,
  makeMorseWord,
  makeSentence,
} from "./translator.js";

const textInput = document.getElementById("textInput");

const button = document.getElementById("button");

const switchButton = document.getElementById("switch");

const display = document.querySelector(".display");

let word = "";
let result = "";

let switchOrder = "default";

button.addEventListener("click", () => {
  word = textInput.value;

  if (switchOrder === "default") {
    result = makeMorseSentence(word);

    createNode(result, display);
  } else if (switchOrder === "morse") {
    result = makeSentence(word);

    createNode(result, display);
  }
});

switchButton.addEventListener("click", () => {
  if (switchOrder === "default") {
    textInput.placeholder = "Type Morse code here";
    switchOrder = "morse";
  } else if (switchOrder === "morse") {
    textInput.placeholder = "Type English here";
    switchOrder = "default";
  }
});

const createNode = (inputText, outputContainer) => {
  const newDiv = document.createElement("div");

  const newContent = document.createTextNode(`${inputText}`);

  newDiv.appendChild(newContent);

  const container = outputContainer;

  container.appendChild(newDiv);

  const br = document.createElement("BR");

  container.appendChild(br);
};
