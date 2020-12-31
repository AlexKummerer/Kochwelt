

//*Calculate the amount of ingredients in case of portion change *//

function calculate() {
  let x = document.getElementById("portions").value;

  let olives = x * 1;
  let pasta = x * 100;
  let onion = x * 0.5;
  let champignons = x * 50;
  let zuchini = x * 1;
  let garlic = x * 1;
  let ham = x * 50;
  let creme = x * 75;
  let parmesan = x * 25;

  document.getElementById("Olives").innerHTML = olives;
  document.getElementById("Pasta").innerHTML = pasta;
  document.getElementById("Onion").innerHTML = onion;
  document.getElementById("Champignons").innerHTML = champignons;
  document.getElementById("Zuchini").innerHTML = zuchini;
  document.getElementById("Garlic").innerHTML = garlic;
  document.getElementById("Ham").innerHTML = ham;
  document.getElementById("Creme").innerHTML = creme;
  document.getElementById("Parmesan").innerHTML = parmesan;
}
