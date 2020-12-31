
//*Calculate the amount of ingredients in case of portion change *//

function calculate() {
    let x = document.getElementById("portions").value;


    let bread = x * 2;
    let avocado = x * 1;
    let tomato = x * 1;
    let sesame = x * 1;

    document.getElementById("Bread").innerHTML = bread;
    document.getElementById("Avocado").innerHTML = avocado;
    document.getElementById("Tomato").innerHTML = tomato;
    document.getElementById("Sesame").innerHTML = sesame;
}