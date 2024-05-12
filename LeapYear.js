function leapyear(){
let a = Number(prompt());
if((a % 400 === 0) || a % 4 === 0 && a % 100!= 0){
console.log("This is a leap year....")
}
else{
    console.log("This is not a leap year")
}
}
leapyear();