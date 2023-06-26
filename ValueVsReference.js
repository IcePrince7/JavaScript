let a = [1,2]
let b= a

console.log(a===b);
b.push(19)
console.log(a===b);

addd(b ,"20")
addd(a,25)
console.log(a===b);

function addd(array,element){
    array.push(element)
}
console.log(a,"\n",b);

