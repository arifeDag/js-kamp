class Customer{
    constructor(id, customernumber){
        this.id = id;
        this.customernumber = customernumber;

    }
}
let customer = new Customer(1,667);
// prototyping bir nesneye bambaska bir özellik ekliyor
customer.name="Arife Kara"
console.log(customer.name);

Customer.bisey = "Birşey"
console.log(Customer.bisey);
console.log(customer.customernumber);

class individualCustomer extends Customer{
    constructor(firstName,id,customernumber){
        super(id,customernumber);
        this.firstName = firstName;
    }



}

class corporateCustomer extends Customer{
    constructor(companyName,id,customernumber){
        super(id,customernumber);
        this.companyName = companyName;
    }    

}

// map for döngüsü gibi dömer arrayi
// filter elimizdeki arrayi filitreliyor.yeni referans olusturuyor.sonucu yeni bir array

// .reduce


