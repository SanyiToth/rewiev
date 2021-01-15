



let n = null;
while (n == null) {
    let u = window.prompt("Ez egy °C /°F váltó program. Add meg milyen mértékegységről szeretnél átszámolni?(c/f)");
    if (u == "c") {
        let c = Number.parseInt(window.prompt("Add meg hány °C szeretnél átváltani!"));
        window.alert(c + "°C ---" + toFaren(c) + "°F-nak felel meg!");
        n++;
    } else if (u == "f") {
        let f = Number.parseInt(window.prompt("Add meg hány °F szeretnél átváltani!"));
        window.alert(c + "°F ---" + toCels(f) + "°C-nak felel meg!");
        n++;
    } else {
        window.alert("Hibás értéket adtál meg. Kezd előröl!")
    }
}

function toFaren(c) {
    return (c * 1.8) + 32;
}

function toCels(f) {
    return Math.round((f - 32) / 1.8);
}

