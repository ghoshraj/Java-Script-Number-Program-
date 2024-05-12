function currency(){
let a = Number(prompt())
if(a >= 2000){
    console.log(`${a} = ${Math.trunc(a/2000)}`)
    a = a%2000;
}
if(a >= 500){
    console.log(`${a} = ${Math.trunc(a/500)}`)
    a = a%500;
}
if(a >= 200){
    console.log(`${a} = ${Math.trunc(a/200)}`)
    a = a%200;
}
if(a >= 100){
    console.log(`${a} = ${Math.trunc(a/100)}`)
    a = a%100;
}
}
currency();