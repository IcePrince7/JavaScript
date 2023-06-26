let  profile1 ={
    name :"George",
    age :10,
    height : "7.1 ft"
}
let  profile2 ={
    name :"James",
    age :16,
    weight : "58kg"
}

profile1.__proto__=profile2

console.log(profile2.show())
