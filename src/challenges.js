// Desafio 1
function compareTrue(firstBoolean, secondBoolean) {
  return (firstBoolean === true && secondBoolean === true);
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(originalString) {
  return originalString.split(' ');
}

// Desafio 4
function concatName(stringsArray) {
  let lastElement = stringsArray.length - 1;
  return stringsArray[lastElement].concat(', ').concat(stringsArray[0]);
}

// Desafio 5
function footballPoints(wins, draws) {
  return (wins * 3) + (draws * 1);
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
