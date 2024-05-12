function main() {
    let num = 2;
    if(num === 1){
        console.log(`${num} is not a prime number`);
    }
    if(num === 2 || num === 3){
        console.log(`${num} is a prime number`)
    }
    for (let i = 2; i <= Math.trunc(num / 2); i++) {
        if (num % i === 0) {
            console.log(num + " is not a prime number");
            break;
        }
        else {
            console.log(num + " is a prime number");
        }
    }
}
main();