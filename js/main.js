/*Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.*/


for(let i = 1; i <= 100; i++ ){
    //i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”
    if (i % 3 == 0 && i % 5 == 0) {
        x = i;
        x = `FizzBuzz`;
        console.log(x);

    // i multipli di 3 stampi “Fizz”   
    }else if (i % 3 == 0) {
        x = i;
        x = `Fizz`;
        console.log(x);

    //i multipli di 5 stampi “Buzz”
    } else if (i % 5 == 0) {
        x = i;
        x = `Buzz`;
        console.log(x);
    }


    console.log(i);

}
