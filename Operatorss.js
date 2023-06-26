console.log("\n----------Creating Infinity----------")
let num1 =5 /0
console.log(num1 ,typeof num1)
let num2 =-5 /0
console.log(num2 ,typeof num2)

console.log("\n----------Adding DataTypes(type coerison)----------")
let number1 =10 +"2"
console.log(number1 ,typeof number1)
let number2 ="10" - 2
console.log(number2 ,typeof number2)
number2 ="Sakthi" - 10
console.log(number2 ,typeof number2)

console.log("\n----------Type Conversion----------")
console.log("\n----------For Number----------")
num1 = Number("123")
console.log(num1 ,typeof num1)
num2 =Number("567Sakthi") 
console.log(num2 ,typeof num2)


console.log("\n----------For Boolean----------")
console.log("Boolean of 0 is "+Boolean(0)) 
console.log("Boolean of -0 is "+Boolean(-0)) 
console.log("Boolean of 1 is "+Boolean(1)) 
console.log("Boolean of -1 is "+Boolean(-1)) 
console.log("Boolean of 2 is "+Boolean(2))
console.log("Boolean of -2 is "+Boolean(-2))  
console.log("Boolean of 10 is "+Boolean(10)) 
console.log("Boolean of -10 is "+Boolean(-10)) 

console.log("\n----------For String----------")
Str1 = String(123)
console.log(Str1,typeof Str1)
Str2 = String(Boolean(0))
console.log(Str2,typeof Str2)


