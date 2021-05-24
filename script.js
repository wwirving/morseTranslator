import { makeMorseSentence, makeMorseWord } from "./translator.js";

const textInput = document.getElementById("textInput");

const button = document.getElementById("button");

const display = document.querySelector(".display");

let word = "";
let result = "";

button.addEventListener("click", () => {
  word = textInput.value;
  result = makeMorseSentence(word);

  createNode(result, display);
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
