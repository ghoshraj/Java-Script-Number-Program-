function main(){
    let a = 1;
    let b = a++ + ++a + ++a + a++;
    console.log(a , b);
}
main();
//1 + 3 + 4 + 4