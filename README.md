MorseTranslator is a JS application which translates and sonifies text to morse code using HTML, CSS and JS. 

CODE

MorseTranslator was built to develop skills in TDD and unit-testing using Jest. The functionality of the translator revolves around nested functions handling character, string and then sentence length, an approach supported by testing since the output of each function could be checked and tested from the ground up. This skeleton then made it easy to add additional functionality, such as reversing the translation or adding audio to each character further down the line.

SOUND

Sound was handled by Howler.JS, whereby each character is checked as a dot or dash and then triggers the relative long or short note. Master effects (reverb, filtering) are handled by Tuna.JS.

DESIGN

The fonts used are Happy Times at the IKOB and Pillowlava. Design file for the app, and early iterations, were done in Figma - https://www.figma.com/file/FOrb6J98iKhzCbYXd7a5mZ/Morse-Code-Translator?node-id=2%3A4

