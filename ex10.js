function longueursMots(mots) {
  let newArr = [];
  for (let I = 0; I < mots.length; I++) {
    newArr.push(mots[I].length);
  }

  return newArr;
}
console.log(longueursMots(["chat", "éléphant", "lion"])); // Résultat attendu : [4, 8, 4]
