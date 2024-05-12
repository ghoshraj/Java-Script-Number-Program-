function main() {
    let a = 145;
    let b = a;
    let sum = 0;
    while (b > 0) {
        let reminder = b % 10;
        let factorial = 1;
        for (let i = 1; i <= reminder; i++) {
            factorial *= i;
        }
        console.log(factorial)
        sum += factorial;
        b = Math.trunc(b / 10);    
    }
    console.log(sum)
    if (sum === a) {
        console.log(`${a} is a perfect number`)
    }
    else {
        console.log(`${a} is not a perfect number`)
    }
} main();