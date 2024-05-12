function main() {
    let a = 101;
    let sum = 0;
    let i = 1;
    while (a > 0) {
        let reminder = a % 10;
        sum = sum + (reminder * i)
        i = i * 2;
        a = Math.trunc(a / 10);
    }
    console.log(sum)
} main();