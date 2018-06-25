function pow(x, n) {
    if (n < 1 || Math.trunc(n) != n)
        return NaN;
    let result = 1;
    while (n-- > 0) {
        result *= x;
    }
    return result;
}

let x = +prompt("x = ");
let n = +prompt("n = ");
let p = pow(x, n);
alert(x + "^" + n + " = " + p);