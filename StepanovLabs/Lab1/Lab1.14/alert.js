function makeArray(size, val = 0) {
    result = [];
    for (let i = 0; i < size; ++i) {
        result[i] = val;
    }
    return result;
}

function easy(beg, end) {
    if (beg < 2 || end < beg)
        return [NaN];
    let n = end + 1;
    let arr = makeArray(n, true);
    for (let i = 2; i * i <= end; ++i) {
        if (arr[i]) {
            for (let j = i * i; j <= end; j += i) {
                arr[j] = false;
            }
        }
    }
    let result = [];
    for (let i = beg; i <= end; ++i) {
        if (arr[i])
            result.push(i);
    }
    return result;
}

let beg = +prompt("Введите начало диапазона:");
let end = +prompt("Введите конец диапазона:");
alert("Простые числа от " + beg + " до " + end + ": " + easy(beg, end));