function mainFunc(mainVar){
    return ( function subFunc(subVal){
        console.log("Outer function val : ",mainVar);
        console.log("Inner Function val : ",subVal)
    }
    )
}


let holder = mainFunc("universe ")
// console.log(mainVar);
holder("Earth")