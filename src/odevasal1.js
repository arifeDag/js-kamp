function f(x) {
    if (x <= 1)
        return false;

    if (x == 2)
        return true;

    if (x == 3)
        return true;

    if (x == 5)
        return true;

    if (x == 7)
        return true;

    for (let i = 2; i < parseInt(x / 2); i++)
        if (x % i == 0) {
            return false;
        }

    return true;
}

    let deger =987
    let result = f(deger);

    if (result)
        console.log(deger, "asaldır");
    else
        console.log(deger, "asaldır değildir");


