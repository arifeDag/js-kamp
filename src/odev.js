

 let sayi1 = 11;
sayi1 = "Arife Kara"
 let student ={id:1, name:"Arife"}
 console.log(student);
 
 function save(puan=75,ogrenci) {
    //  console.log(ogrenci.name + " : " + puan)
     
 }
//  save(undefined,student);
 //save(student,50);
 
 /*save({id:2, name:"Ertugrul"});


 save({id:3, name:"Yavuz"}); */

 let students = ["Arife","Ertugrul","Yavuz Ali","Yagız Alp"]
 // console.log(students);

let students2 = [student,{id:2,name:"Ertugrul"},"Ankara",{city:"istanbul"}]

// console.log(students2);

// rest
// params
// varArgs
let showProducts = function (id,...Products) {
    console.log(id);
    console.log(Products[0]);//-> buna rest parametre denir 
    
}
// showProducts(10,["elma","üzüm","karpuz"]);

//spread(arrayi ayırma işlemi)
let points = [1,3,4,5,18,75,8,7]
console.log(...points);
console.log(Math.max(...points));

//Destructuring =atama işlemi
let populations = [10000,20000,30000,[40000,10000]]
let[small,medium,high,[veryHigh,maximum]]=populations
console.log(small);
console.log(medium);
console.log(high);
console.log(veryHigh);
console.log(maximum);

function someFunction([medium1],number) {
    console.log(medium1)
    
}
someFunction(populations);
let category = {id:1, name:"içeçek"}
console.log(category.id);
console.log(category["name"]);

let{id,name}=category
console.log(id);
console.log(name);

//Re



