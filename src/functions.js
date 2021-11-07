function addToCart(productName="Elma  ",quantity="3") {
    console.log("Sepete eklendi:"+ productName   
    + "adet:" +  quantity)
    
}

addToCart();
addToCart("yumurta ",13);
addToCart("portakal ",10);
addToCart("seker ",4);

let sayHello = () => {
    console.log("Hello World!")


}
sayHello () ;

let sayHello2 = function () {
    console.log("Hello world 2")
    
}

sayHello2();

let product1 = {productName:"elma ",unitprice:" 15 "  ,quantity:" 5 "}


function addToCart2(product)
 {
     console.log("ürün : " +product.productName)
     console.log("adet : "+product.quantity)
     console.log("fiyat : "+product.unitprice)


    
}

addToCart2(product1);


function addToCart3(x) {
    console.log(x)
    
}

let products =[
    {productName:"Elma ",unitprice:" 15 "  ,quantity:" 5 "},
    {productName:"Armut ",unitprice:" 15 "  ,quantity:" 5 "},
    {productName:"Mandalina ",unitprice:" 15 "  ,quantity:" 5 "}

 

]

addToCart3(products);

function add(bisey,...numbers) { //rest opereteri
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total =total + numbers[i];
        
    }

    console.log(total);
    console.log("bisey: " + bisey);


    
}

add(30,40);
add(20,60,18);
add(25,30,80,73);

let numbers= [30,10,80,90,900,600]

console.log(Math.max(...numbers));

console.log("Buradan Sonrası Çalışmıyor");

let [icanadolu,marmara,karadeniz,[icanadolusehirleri,marmarasehirleri,karadenizsehirleri]] = [
    {name:" iç Anadolu", population:" 20M"},
    {name:" Marmara", population:" 60M"},
    {name:" Karadeniz", population:" 10M"},
     [
         ["Ankara" ,"  Konya" ," Çankırı"],
         ["İstanbul","  Bursa"],
         ["Sinop","  Trabzon"]
     ]

]
console.log(icanadolu.population);

console.log(marmara.name);
console.log(icanadolusehirleri);
console.log(marmarasehirleri);
console.log(karadenizsehirleri);

let newProductName, newUnitPrice,newQuantity
({productName:newProductName,unitprice:newUnitPrice,quantity:newQuantity}
= {productName:"Elma ",unitprice:"15"  ,quantity:5} ) 


console.log(newProductName);    
console.log(newUnitPrice);
console.log(newQuantity);

