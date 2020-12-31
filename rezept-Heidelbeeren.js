//*Calculate the amount of ingredients in case of portion change *//

function calculate() {
    let x = document.getElementById('portions').value;

    if (x > 0) {

        let honey = x * 1.5;
        let walnuts = x * 15;
        let almon = x * 15;
        let pine = x * 1.5;
        let bleuberries = x * 2;
        let yoghurt = x * 100;

        document.getElementById('Honey').innerHTML = honey;
        document.getElementById('Walnuts').innerHTML = walnuts;
        document.getElementById('Almon').innerHTML = almon;
        document.getElementById('Pine').innerHTML = pine;
        document.getElementById('Blueberries').innerHTML = bleuberries;
        document.getElementById('Yoghurt').innerHTML = yoghurt;
    }
}