export const charToMorseCode = (input) => {
  let outputStr = "Please enter an input";
  if (isNaN(input)) {
    switch (input.toLowerCase()) {
      case "a":
        outputStr = ".-";
        break;
      case "b":
        outputStr = "-...";
        break;
      case "c":
        outputStr = "-.-.";
        break;
      case "d":
        outputStr = "-..";
        break;
      case "e":
        outputStr = ".";
        break;
      case "f":
        outputStr = "..-.";
        break;
      case "g":
        outputStr = "--.";
        break;
      case "h":
        outputStr = "....";
        break;
      case "i":
        outputStr = "..";
        break;
      case "j":
        outputStr = ".---";
        break;
      case "k":
        outputStr = "-.-";
        break;
      case "l":
        outputStr = ".-..";
        break;
      case "m":
        outputStr = "--";
        break;
      case "n":
        outputStr = "-.";
        break;
      case "o":
        outputStr = "---";
        break;
      case "p":
        outputStr = ".--.";
        break;
      case "q":
        outputStr = "--.-";
        break;
      case "r":
        outputStr = ".-.";
        break;
      case "s":
        outputStr = "...";
        break;
      case "t":
        outputStr = "-";
        break;
      case "u":
        outputStr = "..-";
        break;
      case "v":
        outputStr = "...-";
        break;
      case "w":
        outputStr = ".--";
        break;
      case "x":
        outputStr = "-..-";
        break;
      case "y":
        outputStr = "-.--";
        break;
      case "z":
        outputStr = "--..";
        break;
      case ".":
        outputStr = ".-.-.-";
        break;
      case ",":
        outputStr = "--..--";
        break;
      case ":":
        outputStr = "---...";
        break;
      case "?":
        outputStr = "..--..";
        break;
      case "'":
        outputStr = ".----.";
        break;
      case "-":
        outputStr = "-....-";
        break;
      default:
        outputStr = "Please enter an input";
    }
  } else if (input.trim().length > 0) {
    switch (Number(input)) {
      case 0:
        outputStr = "-----";
        break;
      case 1:
        outputStr = ".----";
        break;
      case 2:
        outputStr = "..---";
        break;
      case 3:
        outputStr = "...--";
        break;
      case 4:
        outputStr = "....-";
        break;
      case 5:
        outputStr = ".....";
        break;
      case 6:
        outputStr = "-....";
        break;
      case 7:
        outputStr = "--...";
        break;
      case 8:
        outputStr = "---..";
        break;
      case 9:
        outputStr = "----.";
        break;
      default:
        outputStr = "Please enter an input";
    }
  }

  return outputStr;
};

export const makeMorseWord = (input) => {
  let charArr = input.split("");
  const toMorse = charArr.map((word) => {
    return charToMorseCode(word);
  });
  return toMorse.join(" ");
};

export const makeMorseSentence = (input) => {
  let wordArr = input.split(" ");
  const toMorse = wordArr.map((word) => {
    return makeMorseWord(word);
  });

  return toMorse.join(" / ");
};

export const morseToChar = (input) => {
  let outputStr = "Please enter an input";
  if (isNaN(input)) {
    switch (input.toLowerCase()) {
      case ".-":
        outputStr = "a";
        break;
      case "-...":
        outputStr = "b";
        break;
      case "-.-.":
        outputStr = "c";
        break;
      case "-..":
        outputStr = "d";
        break;
      case ".":
        outputStr = "e";
        break;
      case "..-.":
        outputStr = "f";
        break;
      case "--.":
        outputStr = "g";
        break;
      case "h":
        outputStr = "....";
        break;
      case "i":
        outputStr = "..";
        break;
      case "j":
        outputStr = ".---";
        break;
      case "k":
        outputStr = "-.-";
        break;
      case "l":
        outputStr = ".-..";
        break;
      case "m":
        outputStr = "--";
        break;
      case "n":
        outputStr = "-.";
        break;
      case "o":
        outputStr = "---";
        break;
      case "p":
        outputStr = ".--.";
        break;
      case "q":
        outputStr = "--.-";
        break;
      case "r":
        outputStr = ".-.";
        break;
      case "s":
        outputStr = "...";
        break;
      case "t":
        outputStr = "-";
        break;
      case "u":
        outputStr = "..-";
        break;
      case "v":
        outputStr = "...-";
        break;
      case "w":
        outputStr = ".--";
        break;
      case "x":
        outputStr = "-..-";
        break;
      case "y":
        outputStr = "-.--";
        break;
      case "z":
        outputStr = "--..";
        break;
      case ".":
        outputStr = ".-.-.-";
        break;
      case ",":
        outputStr = "--..--";
        break;
      case ":":
        outputStr = "---...";
        break;
      case "?":
        outputStr = "..--..";
        break;
      case "'":
        outputStr = ".----.";
        break;
      case "-":
        outputStr = "-....-";
        break;
      default:
        outputStr = "Please enter an input";
    }
  } else if (input.trim().length > 0) {
    switch (Number(input)) {
      case 0:
        outputStr = "-----";
        break;
      case 1:
        outputStr = ".----";
        break;
      case 2:
        outputStr = "..---";
        break;
      case 3:
        outputStr = "...--";
        break;
      case 4:
        outputStr = "....-";
        break;
      case 5:
        outputStr = ".....";
        break;
      case 6:
        outputStr = "-....";
        break;
      case 7:
        outputStr = "--...";
        break;
      case 8:
        outputStr = "---..";
        break;
      case 9:
        outputStr = "----.";
        break;
      default:
        outputStr = "Please enter an input";
    }
  }

  return outputStr;
};
