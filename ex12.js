function filtrerLongsMots(mots) {
  let newArr = [];
  for (let I = 0; I < mots.length; I++) {
    if (mots[I].length > 5) {
      newArr.push(mots[I]);
    }
  }
  return newArr;
}

console.log(filtrerLongsMots(["chat", "éléphant", "chien", "lion"])); // Résultat attendu : ["éléphant"]
console.log(
  filtrerLongsMots(["counter-strike", "valorant", "overwatch", "diablo"])
); // Résultat attendu : ["counter-strike", "valorant", "overwatch", "diablo"]
