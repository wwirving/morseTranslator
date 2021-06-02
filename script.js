import {
  makeMorseSentence,
  makeMorseWord,
  makeSentence,
} from "./translator.js";

const textInput = document.getElementById("textInput");

const button = document.getElementById("button");

const switchButton = document.getElementById("switch");

const display = document.querySelector(".morseoutput");

const morse = document.querySelector(".output")

let word = "";
let result = "";

let switchOrder = "default";

let hasTranslated = false;

button.addEventListener("click", () => {
  if (hasTranslated === true){
    textInput.style.fontFamily = "HappyItal"
    removeNode(display);
    textInput.value = '';
    hasTranslated = false;
  } else if (hasTranslated === false) {
    
    word = textInput.value;
  
    if (switchOrder === "default" && textInput.value.length >= 1) {
      result = makeMorseSentence(word);

      if (result.includes('Please enter a valid input')){
        result = 'Please enter a valid input'

      }
  
  
      createNode(result, display, "Pilowlava" );
      hasTranslated = true;
    } else if (switchOrder === "morse" && textInput.value.length >= 1) {
      result = makeSentence(word);

      if (result.includes('Please enter a valid input')){
        result = 'Please enter a valid input'

      }
  
      createNode(result, display, "HappyItal");
      hasTranslated = true;
    } else {
      result = 'Please enter a valid input'
      createNode(result, display, "HappyItal");
      hasTranslated = true;
    }
  }
});

switchButton.addEventListener("click", () => {
  if (switchOrder === "default") {
    textInput.value = '';
    removeNode(display);
    hasTranslated = false;
    textInput.style.fontFamily = "HappyItal"
    textInput.placeholder = "Type Morse code here";

    switchOrder = "morse";
  } else if (switchOrder === "morse") {
    textInput.value = '';
    removeNode(display);
    hasTranslated = false;
    textInput.style.fontFamily = "HappyItal"
    textInput.placeholder = "Type English here";
    switchOrder = "default";
  }
});

textInput.addEventListener('keyup', () => {
  removeNode(display);
  hasTranslated = false;
  if (switchOrder === "morse" && textInput.value.length > 0){
    textInput.style.fontFamily = "Pilowlava"
    hasTranslated = false;
  } else {
    textInput.style.fontFamily = "HappyItal"
    hasTranslated = false;
  }
})

const createNode = (inputText, outputContainer, font) => {
  const newDiv = document.createElement("h1");

  const newContent = document.createTextNode(`${inputText}`);

  newDiv.appendChild(newContent);

  const container = outputContainer;

  newDiv.style.fontFamily = font

  container.appendChild(newDiv);

  const br = document.createElement("BR");

  container.appendChild(br);
};


const removeNode = (outputContainer) => {
  const container = outputContainer;
  if (container.childNodes.length > 0){
   
    container.removeChild(container.firstChild);
  }
  
}