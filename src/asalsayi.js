let sayac = 0;

for (let sayi = 2; sayi < 1000; sayi++) {
    for (let i = 1; i <= sayi; i++) {

        if (sayi % i == 0) {
            sayac++;
        }

        if (sayac > 2)
            break;

    }
    if (sayac == 2) {
        console.log(sayi + " asal sayıdır ");
    } else sayac = 0;
}
