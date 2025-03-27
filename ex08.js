function multiplierParDeux(tab) {
  newtab = [];
  newtab.push(tab[0] * 2);
  newtab.push(tab[1] * 2);
  newtab.push(tab[2] * 2);
  return newtab;
}
console.log(multiplierParDeux([1, 2, 3])); // Résultat attendu : [2, 4, 6]
