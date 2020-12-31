//*Change Recipe of the day, every day*//

function loadRecipeOftheDay() {
    let currentDay = new Date().getDate();

    if (
        currentDay == 1 ||
        currentDay == 7 ||
        currentDay == 10 ||
        currentDay == 13 ||
        currentDay == 16 ||
        currentDay == 19 ||
        currentDay == 22 ||
        currentDay == 25 ||
        currentDay == 28 ||
        currentDay == 31
    ) {
        window.location.href = "Tomaten-Avocado.html";
    }

    if (
        currentDay == 2 ||
        currentDay == 5 ||
        currentDay == 8 ||
        currentDay == 11 ||
        currentDay == 14 ||
        currentDay == 17 ||
        currentDay == 20 ||
        currentDay == 23 ||
        currentDay == 26 ||
        currentDay == 29
    ) {
        window.location.href = "Nudeln-Parmesan.html";
    }

    if (
        currentDay == 3 ||
        currentDay == 6 ||
        currentDay == 9 ||
        currentDay == 12 ||
        currentDay == 15 ||
        currentDay == 18 ||
        currentDay == 21 ||
        currentDay == 24 ||
        currentDay == 27 ||
        currentDay == 30
    ) {
        window.location.href = "Rezept-Heidelbeerenjoghurth.html";
    }

    if (currentDay == 4) {
        window.location.href = "Lachs-Steak.html";
    }
}