
let sayi;
for ( sayi = 2; sayi < 1000; sayi++) {
    let toplam = 0;
    for (let i = 1; i < sayi; i++) {
        if(sayi%i==0){
            toplam +=i;
        }

    }

    if(sayi == toplam){
        console.log(sayi + "  mükemmel sayı");
    }
   
    
}
 