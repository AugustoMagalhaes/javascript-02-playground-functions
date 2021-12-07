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

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  function isTriangle(a, b, c) {
    return ((a < b + c) && a > Math.abs(b - c));
  }
  return (isTriangle(lineA, lineB, lineC) && isTriangle(lineB, lineA, lineC) && isTriangle(lineC, lineB, lineA));
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
  return (numberOfHydrates === 1) ? `${numberOfHydrates} copo de água` : `${numberOfHydrates} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
