const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.

let eurotodollar = (a) => {
    return a*1.2
} 
let eurotoyen = (a) => {
    return a*127.9
} 
let eurotolibra = (a) => {
    return a*0.8
} 
module.exports = {sum,eurotodollar,eurotoyen,eurotolibra};