const deepClone = obj => JSON.parse(JSON.stringify(obj))


let x = { a: "b", a2: ["first", "second"] };
let y = { b: x, b3: ["firtsY", x], a3: { b: "do that", c: { d: "do it" } } };
let z = deepClone(y);
console.log(z);

