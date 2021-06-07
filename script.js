import {
  makeMorseSentence,
  makeMorseWord,
  makeSentence,
} from "./translator.js";

const dot = new Howl({
  src: "./assets/sounds/dot.mp3",
  volume: 0.5,
  loop: false,
});

const long = new Howl({
  src: "./assets/sounds/long.mp3",
  volume: 0.5,
  loop: false,
});

const tuna = new Tuna(Howler.ctx);

const delay = new tuna.PingPongDelay({
  wetLevel: 0.2, //0 to 1
  feedback: 0.3, //0 to 1
  delayTimeLeft: 800, //1 to 10000 (milliseconds)
  delayTimeRight: 600, //1 to 10000 (milliseconds)
});

Howler.addEffect(delay);

const textInput = document.getElementById("textInput");

const button = document.getElementById("button");

const switchButton = document.getElementById("switch");

const display = document.querySelector(".morseoutput");

const morse = document.querySelector(".output");

let word = "";
let result = "";

let switchOrder = "default";

let hasTranslated = false;

button.addEventListener("click", () => {
  if (hasTranslated === true) {
    textInput.style.fontFamily = "HappyItal";
    removeNode(display);
    textInput.value = "";
    display.textContent = "";
    hasTranslated = false;
  } else if (hasTranslated === false) {
    word = textInput.value;

    if (switchOrder === "default" && textInput.value.length >= 1) {
      result = makeMorseSentence(word);

      var i = 0;

      runner();

      function runner() {
        display.append(result.charAt(i));
        if (result.charAt(i) === ".") {
          dot.play();
        } else if (result.charAt(i) === "-") {
          long.play();
        } else {
          console.log("space");
        }
        i++;
        setTimeout(function () {
          if (i < result.length) runner();
          else {
            i = 0;
          }
        }, Math.floor(Math.random() * 1000) + 2);
      }

      if (result.includes("Please enter a valid input")) {
        result = "Please enter a valid input";
      }

      hasTranslated = true;
    } else if (switchOrder === "morse" && textInput.value.length >= 1) {
      result = makeSentence(word);

      if (result.includes("Please enter a valid input")) {
        result = "Please enter a valid input";
      }

      var i = 0;

      runner();

      function runner() {
        display.append(result.charAt(i));
        i++;
        setTimeout(function () {
          if (i < result.length) runner();
          else {
            i = 0;
          }
        }, Math.floor(Math.random() * 500) + 2);
      }

      hasTranslated = true;
    } else {
      result = "Please enter a valid input";
      createNode(result, display, "HappyItal");
      hasTranslated = true;
    }
  }
});

switchButton.addEventListener("click", () => {
  if (switchOrder === "default") {
    textInput.value = "";
    removeNode(display);
    hasTranslated = false;
    textInput.style.fontFamily = "HappyItal";
    textInput.placeholder = "Type Morse code here";

    switchOrder = "morse";
  } else if (switchOrder === "morse") {
    textInput.value = "";
    removeNode(display);
    hasTranslated = false;
    textInput.style.fontFamily = "HappyItal";
    textInput.placeholder = "Type English here";
    switchOrder = "default";
  }
});

textInput.addEventListener("keyup", () => {
  removeNode(display);
  hasTranslated = false;
  if (switchOrder === "morse" && textInput.value.length > 0) {
    textInput.style.fontFamily = "Pilowlava";
    hasTranslated = false;
  } else {
    textInput.style.fontFamily = "HappyItal";
    hasTranslated = false;
  }
});

const createNode = (inputText, outputContainer, font) => {
  const newDiv = document.createElement("h1");

  const newContent = document.createTextNode(`${inputText}`);

  newDiv.appendChild(newContent);

  const container = outputContainer;

  newDiv.style.fontFamily = font;

  container.appendChild(newDiv);

  const br = document.createElement("BR");

  container.appendChild(br);
};

const removeNode = (outputContainer) => {
  const container = outputContainer;
  if (container.childNodes.length > 0) {
    container.removeChild(container.firstChild);
  }
};
