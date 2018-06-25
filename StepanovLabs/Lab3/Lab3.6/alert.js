const NUM = 100;

function makeArray(size, val = 0) {
    res = [];
    for (let i = 0; i < size; ++i) {
        res[i] = val;
    }
    return res;
}

function easy() {

    let n = NUM + 1;
    let arr = makeArray(n, true);
    for (let i = 2; i * i <= NUM; ++i) {
        if (arr[i]) {
            for (let j = i * i; j <= NUM; j += i) {
                arr[j] = false;
            }
        }
    }
    let res = [];
    for (let i = 2; i <= NUM; ++i) {
        if (arr[i])
            res.push(i);
    }
    return res;
}

let primes = easy();
let sum = primes.reduce(function(sum, current) {
  return sum + current;
}, 0);
alert("Сумма простых чисел : " + sum);