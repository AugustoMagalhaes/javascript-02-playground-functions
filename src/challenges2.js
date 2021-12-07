// Desafio 10
function techList(arrayTech, incumbentsName) {
  if (arrayTech.length === 0) {
    return 'Vazio!';
  }
  let sortedArray = arrayTech.sort(function (a, b) {
    return a.localeCompare(b); // fonte: https://graciano.me/2019/07/03/ordenacao-array-javascript-sort-funcao-funcional
  });
  let techListName = [];
  for (let i = 0; i < sortedArray.length; i += 1) {
    let ithElement = { tech: sortedArray[i], name: incumbentsName };
    techListName.push(ithElement);
  }
  return techListName;
}

function checkThreeRepetition(array) {
  for (let i = 0; i < array.length; i += 1) {
    let count = 0;
    for (let j = 0; j < array.length; j += 1) {
      if (array[i] === array[j]) {
        count += 1;
      }
      if (count >= 3) {
        return false;
      }
    }
  }
  return true;
}

function checkNumberAlgarism(array) {
  for (let element of array) {
    if (element < 0 || element > 9) {
      return false;
    }
  }
  return true;
}

// Desafio 11
function generatePhoneNumber(numbersArray) {
  if (numbersArray.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (
    checkNumberAlgarism(numbersArray) === true && checkThreeRepetition(numbersArray) === true) {
    let ddd = `(${numbersArray[0]}${numbersArray[1]}) `;
    let phoneNumber = ddd;
    for (let i = 2; i < numbersArray.length; i += 1) {
      if (i === 6) {
        phoneNumber += numbersArray[i].toString() + '-';
      } else {
        phoneNumber += numbersArray[i].toString();
      }
    }
    return phoneNumber;
  }
  return 'não é possível gerar um número de telefone com esses valores';
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  function isTriangle(a, b, c) {
    return a < b + c && a > Math.abs(b - c);
  }
  return (
    isTriangle(lineA, lineB, lineC) &&
    isTriangle(lineB, lineA, lineC) &&
    isTriangle(lineC, lineB, lineA)
  );
}

// Desafio 13
function hydrate(amountOfDrinks) {
  let splitedAmountOfDrinks = amountOfDrinks.split(' ');
  let numberOfHydrates = 0;
  for (let i = 0; i < splitedAmountOfDrinks.length; i += 1) {
    if (isNaN(splitedAmountOfDrinks[i]) === false) {
      numberOfHydrates += parseInt(splitedAmountOfDrinks[i], 10);
    }
  }
  return numberOfHydrates === 1
    ? `${numberOfHydrates} copo de água`
    : `${numberOfHydrates} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
