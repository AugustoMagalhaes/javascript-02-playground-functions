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
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(numbersArray) {
  let sortedArray = numbersArray.sort(function (a, b) {
    return a - b;
  });
  let lastElement = sortedArray[sortedArray.length - 1];
  return (sortedArray.lastIndexOf(lastElement) - sortedArray.indexOf(lastElement)) + 1;
  /* retorna a diferença, em uma array ordenada crescentemente, entre a última posiçao do maior número e a primeira posição do mesmo adicionando-se "1", uma vez
  que a diferença calcula a distância entre os dois e não contabiliza a primeira ocorrência. */
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);
  if (distCat1 === distCat2) {
    return 'os gatos trombam e o rato foge';
  }
  return (distCat1 < distCat2) ? 'cat1' : 'cat2';
}

// Desafio 8
function fizzBuzz(intArray) {
  let fizzBuzzArray = [];
  for (let element of intArray) {
    if (element % 15 === 0) {
      fizzBuzzArray.push('fizzBuzz');
    } else if (element % 3 === 0) {
      fizzBuzzArray.push('fizz');
    } else if (element % 5 === 0) {
      fizzBuzzArray.push('buzz');
    } else {
      fizzBuzzArray.push('bug!');
    }
  }
  return fizzBuzzArray;
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
