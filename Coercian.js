console.log("\n----------Adding DataTypes(type coerison)----------")


let number1 = 10 +"2"
console.log(number1 ,typeof number1)

let number2 = number1 - 2
console.log(number2 ,typeof number2)

let number3 = number1 - "2"
console.log(number3 , typeof number3);


console.log("\n----------Truthy values ----------")
console.log("Converting 1 to boolean :" ,Boolean(1));
console.log("Converting 2 to boolean :" ,Boolean(2));
console.log("Converting 100 to boolean :" ,Boolean(100));
console.log("\nConverting -1 to boolean :" ,Boolean(-1));
console.log("Converting -2 to boolean :" ,Boolean(-2));
console.log("Converting -100 to boolean :" ,Boolean(-100));
console.log("\nConverting 'Sakthi' to boolean :" ,Boolean("Sakthi"));

console.log("\n----------Falsy values ----------")
console.log("Converting '' to boolean :" ,Boolean(''));
console.log("Converting 0 to boolean :" ,Boolean(0));
console.log("Converting -0 to boolean :" ,Boolean(-0));
console.log("Converting null to boolean :" ,Boolean(null));
console.log("Converting undefined to boolean :" ,Boolean(undefined));