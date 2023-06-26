let  profile1 ={
    name :"George",
    age :10
}
let  profile2 ={
    name :"James",
    age :16
}

function printProfile(place ="No data"){
    console.log(`Profile name is : ${this.name} and the age is ${this.age} living in ${place}`);
}

// Using call method
newLine("using call")
printProfile.call(profile1,"london")
printProfile.call(profile2, "mexico")

//Using aplly
newLine("USing apply")
printProfile.apply(profile1,["london"])
printProfile.apply(profile2, ["mexico"])

//using bind
newLine("Using bind")
let funcc = printProfile.bind(profile1,"london") 
funcc()

funcc = printProfile.bind(profile2,"mexico") 
funcc()












function newLine (input){console.log ("\n____________",input,"_______________\n")}