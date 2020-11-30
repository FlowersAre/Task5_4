let PrintNumbersTill = (cislo) => {
    for (let i = 0; i <= cislo; i++) {
        console.log(i);
    };
};

PrintNumbersTill(20);
PrintNumbersTill(15);

let GetGreetingTo = (jmeno) =>{
    console.log(`Hello ${jmeno}`);
};

GetGreetingTo('Mark');


let PrintValues = (cisla) => {
    for (let i = 0; i < cisla.length; i++) {
        console.log(cisla[i]);
    };
};

PrintValues([10, 6, 7, 65]);

let MyNumbers = [52, 87, 7, 69];
MyNumbers.forEach(cislo => console.log(cislo));

