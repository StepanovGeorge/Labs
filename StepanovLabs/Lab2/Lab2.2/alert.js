function min(a, b) {
    return a < b ? a : b;
}

let a = +prompt("a = ");
let b = +prompt("b = ");
let res = min(a, b);
alert("min num is = " + res);