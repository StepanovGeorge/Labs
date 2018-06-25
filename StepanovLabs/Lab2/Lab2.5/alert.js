function fact(n) {
    if (n < 2)
        return n >= 0 ? n : NaN;
    return n * fact(n - 1);
}

let n = +prompt("n = ");
alert(n + "! = " + fact(n));