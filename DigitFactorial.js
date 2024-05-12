function main() {
    let a = 145;
    let factorial = 1;
    while (a > 0) {
        let reminder = a % 10;
        for (let i = 1; i <= reminder; i++) {
            factorial *= i;
        }
        console.log(`${reminder} factorial is :${factorial} `)
        factorial = 1;
        a = Math.trunc(a / 10);
    }
} main();