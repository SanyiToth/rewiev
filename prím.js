

function primSzam(x) {
    if (x < 2) {    // 2-nél kisebb számot kiszűri, a legkisebb pímszám a 2.
        return false;
    }
    for (let i = 2; i <= (x/2); i++) {      // a ciklus kiszűri a nem prímszámokat.
        if (x % i === 0) {
            return false;
        }
    }
    return true;
}

function primKi(x) {
    for (let i = 2; i <= x; i++) {  //a ciklus a legkissebb prímszámrol indul és még magát az x-et is vizsgálja.
        if (primSzam(i)) {
             console.log(i);
        }

    }
}

primKi(2);












