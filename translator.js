export const charToMorseCode = (input) => {
  let outputStr = "Please enter a valid input";
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
        outputStr = "Please enter a valid input";
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
        outputStr = "Please enter a valid input";
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
  let outputStr = "Please enter a valid input";
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
      case "....":
        outputStr = "h";
        break;
      case "..":
        outputStr = "i";
        break;
      case ".---":
        outputStr = "j";
        break;
      case "-.-":
        outputStr = "k";
        break;
      case ".-..":
        outputStr = "l";
        break;
      case "--":
        outputStr = "m";
        break;
      case "-.":
        outputStr = "n";
        break;
      case "---":
        outputStr = "o";
        break;
      case ".--.":
        outputStr = "p";
        break;
      case "--.-":
        outputStr = "q";
        break;
      case ".-.":
        outputStr = "r";
        break;
      case "...":
        outputStr = "s";
        break;
      case "-":
        outputStr = "t";
        break;
      case "..-":
        outputStr = "u";
        break;
      case "...-":
        outputStr = "v";
        break;
      case ".--":
        outputStr = "w";
        break;
      case "-..-":
        outputStr = "x";
        break;
      case "-.--":
        outputStr = "y";
        break;
      case "--..":
        outputStr = "z";
        break;
      case ".-.-.-":
        outputStr = ".";
        break;
      case "--..--":
        outputStr = ",";
        break;
      case "---...":
        outputStr = ":";
        break;
      case "..--..":
        outputStr = "?";
        break;
      case ".----.":
        outputStr = "'";
        break;
      case "-....-":
        outputStr = "-";
        break;
      case "-----":
        outputStr = 0;
        break;
      case ".----":
        outputStr = 1;
        break;
      case "..---":
        outputStr = 2;
        break;
      case "...--":
        outputStr = 3;
        break;
      case "....-":
        outputStr = 4;
        break;
      case ".....":
        outputStr = 5;
        break;
      case "-....":
        outputStr = 6;
        break;
      case "--...":
        outputStr = 7;
        break;
      case "---..":
        outputStr = 8;
        break;
      case "----.":
        outputStr = 9;
        break;
      default:
        outputStr = "Please enter a valid input";
    }
  }

  return outputStr.toString();
};

export const makeWord = (input) => {
  let charArr = input.split(" ");
  const toWord = charArr.map((morse) => {
    return morseToChar(morse);
  });
  return toWord.join("");
};

export const makeSentence = (input) => {
  let morseArr = input.trim().split(" / ");
  const sentanceArr = morseArr.map((morse) => {
    return makeWord(morse);
  });

  let fullSentance = sentanceArr.join(" ");

  const sentanceCapitalized =
    fullSentance.charAt(0).toUpperCase() + fullSentance.slice(1);

  return sentanceCapitalized;
};
