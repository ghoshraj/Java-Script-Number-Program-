function main() {
    let count = 0;
    let a = 93084;
    let b = a;
    let sum = 0;
    while (b > 0) {
        count++;
        b =Math.trunc(b / 10);
    }
    b = a;
    while (b > 0) {
        let reminder = b % 10;
        sum = sum +Math.pow(reminder,count);
        b =Math.trunc(b / 10);
    }
    if(sum === a){
        console.log(`${a} is a armstron number`)
    }
    else{
        console.log(`${a} is not a armstrong number`)
    }
} main();