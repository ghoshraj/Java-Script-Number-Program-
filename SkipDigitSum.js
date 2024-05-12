function main(){
let a = 12345;
let sum = 0;
while(a > 0){
    let reminder = a % 10;
    sum = sum + reminder;
    a = Math.trunc(a /10);
}
console.log(sum)
}main();