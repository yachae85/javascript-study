//호이스팅

console.log(a);
var a = 1;
console.log(a);

{
    var c = 2;
}
console.log(c);

console.log(b);
let b = 3;

{
    let d = 4;
}
console.log(d);