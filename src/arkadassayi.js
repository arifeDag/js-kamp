function arkadassayi(sayi1,sayi2) {
    let toplam1 = 0;
    let toplam2 = 0;
    for (let i = 0; i < sayi1; i++) {
        if(sayi1%i == 0){
        toplam1 += i;
        
    }
    
   }
    for (let i = 0; i < sayi2; i++) {
        if(sayi2 % i ==0) {
        toplam2 += i;
        }
        
    }
    if(sayi2 == toplam1 && sayi1 == toplam2  ){
        console.log(sayi1 + " ve " + sayi2 + " arkadaş sayıdır") 

    }
    else
    {
        console.log(sayi1 +  " ve " + sayi2 + " arkadaş sayi değildir.")
    }

}

arkadassayi(330 , 440)