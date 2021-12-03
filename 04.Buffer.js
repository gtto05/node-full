// Buffer() is deprecated due to security and usability issues
let buff1 = new Buffer(6)
console.log(buff1);


let buff2 = new Buffer.alloc(6)
console.log(buff2);

let buff3 = new Buffer.allocUnsafe(6)
console.log(buff3);

let str = 'hello buffer'
let buff4 = Buffer.from(str)
console.log(buff4);

console.log(buff4.toString());
