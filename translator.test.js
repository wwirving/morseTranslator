import {
  charToMorseCode,
  makeMorseWord,
  makeMorseSentence,
  morseToChar,
  makeWord,
  makeSentence,
} from "./translator.js";

describe("testing single Character > morse function", () => {
  it("should output .- when input string is A (uppercase)", () => {
    const result = charToMorseCode("A");
    expect(result).toBe(".-");
  });

  it("should output .- when input string is a (lowercase)", () => {
    const result = charToMorseCode("a");
    expect(result).toBe("x");
  });

  it("should output .---- when input string is 1", () => {
    const result = charToMorseCode("1");
    expect(result).toBe(".----");
  });

  it("should output .-.-.- when input string is .", () => {
    const result = charToMorseCode(".");
    expect(result).toBe(".-.-.-");
  });

  it("should output 'Please enter an input' when input string is blank", () => {
    const result = charToMorseCode("");
    expect(result).toBe("Please enter an input");
  });
});

describe("testing word > morse function", () => {
  it("should convert 'Hello' to '.... . .-.. .-.. ---'", () => {
    const result = makeMorseWord("Hello");
    expect(result).toBe(".... . .-.. .-.. ---");
  });

  it("should convert '2020' to '..--- ----- ..--- -----'", () => {
    const result = makeMorseWord("2020");
    expect(result).toBe("..--- ----- ..--- -----");
  });

  it("should output 'Please enter an input' when input string is blank", () => {
    const result = charToMorseCode("");
    expect(result).toBe("Please enter an input");
  });
});

describe("testing sentence > morse function", () => {
  it("should output / between two words", () => {
    const result = makeMorseSentence("up dog");
    expect(result).toBe("..- .--. / -.. --- --.");
  });

  it("should convert 'Hello 2020' to '.... . .-.. .-.. --- / ..--- ----- ..--- -----' ", () => {
    const result = makeMorseSentence("Hello 2020");
    expect(result).toBe(".... . .-.. .-.. --- / ..--- ----- ..--- -----");
  });

  it("should output 'Please enter an input' when input string is blank", () => {
    const result = charToMorseCode("");
    expect(result).toBe("Please enter an input");
  });
});

describe("testing morse > word character function", () => {
  it("should output a when input string is .- ", () => {
    const result = morseToChar(".-");
    expect(result).toBe("a");
  });

  it("should output 1 when input string is .----", () => {
    const result = morseToChar(".----");
    expect(result).toBe("1");
  });

  it("should output . when input string is .-.-.-", () => {
    const result = morseToChar(".-.-.-");
    expect(result).toBe(".");
  });

  it("should output 'Please enter an input' when input string is blank", () => {
    const result = morseToChar("");
    expect(result).toBe("Please enter an input");
  });
});

describe("testing morse > word function", () => {
  it("should output Hello when input string is .... . .-.. .-.. ---", () => {
    const result = makeWord(".... . .-.. .-.. ---");
    expect(result).toBe("hello");
  });

  it("should output 'Please enter an input' when input string is blank", () => {
    const result = makeWord("");
    expect(result).toBe("Please enter an input");
  });
});

describe("testing morse > sentence function", () => {
  it("should output Hello world when input string is .... . .-.. .-.. --- / .-- --- .-. .-.. -..", () => {
    const result = makeSentence(".... . .-.. .-.. --- / .-- --- .-. .-.. -..");
    expect(result).toBe("Hello world");
  });

  it("should output 'Please enter an input' when input string is blank", () => {
    const result = makeSentence("");
    expect(result).toBe("Please enter an input");
  });
});
