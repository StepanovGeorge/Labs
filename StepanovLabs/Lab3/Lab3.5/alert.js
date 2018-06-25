function Calculator() {
    let operations = {
        "+": function(a, b) {
            return a + b;
        },
        "-": function(a, b) {
            return a - b;
        }
    };
    this.calculate = function(expr) {
        let tmp = expr.split(" ");
        if (tmp.length < 3)
            return NaN;
        let a = +tmp[0];
        let b = +tmp[2];
        let sign = tmp[1];
        if (operations[sign] == null || isNaN(a) || isNaN(b))
            return NaN;
        return operations[sign](a, b);
    };
    this.addMethod = function(name, func) {
        operations[name] = func;
    };
}

let calc = new Calculator();
calc.addMethod("*", function(a, b) {
    return a * b;
});
calc.addMethod("/", function(a, b) {
    return a / b;
});
calc.addMethod("**", function(a, b) {
    return Math.pow(a, b);
});

let expr = prompt("Введите выражение:")
let res = calc.calculate(expr);
alert(expr + " = " + res);

