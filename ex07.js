function afficherElements(tab) {
  for (let I = 0; I <= tab.length; I++) {
    console.log(tab[I]);
  }
}

afficherElements([1, 2, 3, 4]); // Affiche : 1, 2, 3, 4 (un par ligne)
afficherElements([-1, 28, 44, 0]); // Affiche : -1, 28, 44, 0 (un par ligne)
