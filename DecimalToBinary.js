function main() {
    let n = 5;
    let ans = 0;
    let i = 1;
    while (n> 0) {
        let reminder = n % 2;
            ans = reminder * i + ans;
            n =Math.trunc( n/2);
            i = i * 10;
    }
    console.log(ans)
} main();