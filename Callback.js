let arr = [4,6,7,3,6,1,2,9 ]
 
function print( ){
    // arr = arr()
    for (let iterator of arr) {
        console.log(iterator);
} }
  

function mysort(arr){

    for (let index = 0; index < arr.length; index++) {
        for (let index2 = index+1; index2 < arr.length; index2++) {
            if(arr[index] > arr[index2]){
                // console.log("Insife for index : ",index,"index 2 ",index2);
            [arr[index2] ,arr[index]]= [arr[index] ,arr[index2]]}
     }  }  
    // return arr
}

let temp = mysort(arr)
console.log(temp);
// console.log(arr);
print()
// print(temp)