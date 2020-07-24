'use strict'

let heath=[89,120,103]
let zane=[116,94,123]
let mariah=[97,134,105]
let sum=0,average

function average(name){
    for(let i=0;i<name.length;i++){
        sum+=name[i]
    }
    return average=sum/name.length
}

let heathAverage=average(heath)
let zaneAverage=average(zane)
let mariahAverage=average(mariah)

if(heathAverage>zaneAverage && heathAverage>mariahAverage){
    console.log(`Winner is Heath and average value is ${heathAverage}`)
}
else if( zaneAverage>heathAverage && zaneAverage> mariahAverage){
    console.log(`Winner is Zane and average value is ${zaneAverage}`)
}
else{
    console.log(`Winner is Mariah and average value is ${mariahAverage}`)
}
if(zaneAverage===mariahAverage && zaneAverage===heathAverage){
    console.log(`Match is draw!!!`)
}