function main() {
    let a = 11211;
    let sum = 0;
    let b = a;
    let i = 1;
    while (b > 0) {
        let reminder = b % 10;
        sum = sum + (i * reminder);
        i = i * 10;
        b = Math.trunc(b / 10);
    }
    if (sum === a) {
        console.log(`${a} is a palindrome number`)
    }
    else {
        console.log(`${a} is not a palindrome number`)
    }
} main();