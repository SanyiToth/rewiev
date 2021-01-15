// Jóslat
function getRandomInt(max) {
    return Math.floor(Math.random()*max);
}

let gyermekekSzama = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let partnerNeve = ['Sári', 'Mari', 'Bori', 'Erzsi', 'Anna', 'Iza', 'Dóra', 'Béla', 'Dezső'];
let varos = ["Pécs", "Miskolc", "Debrecen", "Budapest", "Dunaújváros", "Paks", "Szeged", "Szombathely", "Ózd"];
let foglalkozas = ["orvos", "pék", "fodrász", "építész", "programozó", "utcaseprű", "biztonsági őr", "atomfizikus", "kukabúvár"];


document.writeln("Te egy " +
    foglalkozas[getRandomInt(foglalkozas.length)] +
    " leszel " +
    varos[getRandomInt(varos.length)] +
    "-ban/ben, és " +
    partnerNeve[getRandomInt(partnerNeve.length)] +
    " lesz a párod, születni fog " +
    gyermekekSzama[getRandomInt(gyermekekSzama.length)] +
    " gyereketek."
);

