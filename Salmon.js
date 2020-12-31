function calculate() {
    let x = document.getElementById("portions").value;


    //*Calculate the amount of ingredients in case of portion change *//
    if (x > 0) {
        let salmon = x * 1;
        let cherry = x * 100;
        let onion = x * 0.5;
        let basil = x * 0.25;
        let olives = x * 0.5;
        let broth = x * 32.5;

        let zitrus = x * 1;
        document.getElementById("Salmon").innerHTML = salmon;
        document.getElementById("Cherry").innerHTML = cherry;
        document.getElementById("Onion").innerHTML = onion;
        document.getElementById("Basil").innerHTML = basil;
        document.getElementById("Olives").innerHTML = olives;
        document.getElementById("Broth").innerHTML = broth;

        document.getElementById("Zitrus").innerHTML = zitrus;
    }
}