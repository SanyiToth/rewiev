let elertPont = Number.parseInt(window.prompt("Kérlek add meg a pontszámot!"))
let maxPont = 55;
let elertSzazalek = Math.round((elertPont / maxPont) * 100);
if (elertSzazalek < 20) {
    console.log("Az elért százalék: " + elertSzazalek + "%, osztályzat 1-es!");
} else if (elertSzazalek >= 20 && elertSzazalek <= 40) {
    console.log("Az elért százalék: " + elertSzazalek + "%, osztályzat 2-es!");
} else if (elertSzazalek > 40 && elertSzazalek <= 60) {
    console.log("Az elért százalék: " + elertSzazalek + "%, osztályzat 3-as!");
} else if (elertSzazalek > 60 && elertSzazalek <= 80) {
    console.log("Az elért százalék: " + elertSzazalek + "%, osztályzat 4-es!");
} else {
    console.log("Az elért százalék: " + elertSzazalek + "%, osztályzat 5-es!");
}

