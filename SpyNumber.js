function main() {
    let num = 1124;
    let a = num;
    let sum = 0;
    let multiply = 1;
    while (num > 0) {
        let reminder = num % 10;
        sum = sum + reminder;
        multiply = multiply * reminder;
        num =Math.trunc(num / 10);
    }
    console.log(sum)
    console.log(multiply)
    if (sum === multiply) {
        console.log(`${a} is  a spy number`);
    }
    else {
        console.log(`${a} is not a spy number`);
    }
} main();