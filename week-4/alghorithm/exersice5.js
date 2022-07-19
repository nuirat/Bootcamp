
function dublicate(x) {
    let dublicates = []
    for (i = 0; i < x.length; i++) {
        dublicates[i] = x[i]
        dublicates[i + x.length] = x[i]
    }
    return dublicates 
}
let x = [1, 2, 3]
console.log(dublicate(x));