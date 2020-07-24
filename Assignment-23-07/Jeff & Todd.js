'use Strict'
const jeffWeight= window.prompt("Jeff's Weight(in K.G): ")
const toddWeight= window.prompt("Todd's Weight(in K.G): ")
const jeffHeight= window.prompt("Jeff's Height(in Meter): ")
const toddHeight= window.prompt("Todds Height(in Meter): ")

let jeffBmi=jeffWeight/(jeffHeight*jeffHeight)
let toddBmi=toddWeight/(toddHeight*toddHeight)

if(jeffBmi>toddBmi){
    var jeffHigher=true
}
else{
    var jeffHigher=false
}

document.write(`is Jeff’s BMI higher than Todd’s ${jeffHigher}?`)