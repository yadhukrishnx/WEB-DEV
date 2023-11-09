var read=require('readline-sync');
var value1=read.question('Enter First Number : ');
var value2=read.question('Enter Second Number : ');
if(value1>value2){
    console.log(value1," Is Greater than ",value2);
}
else if(value2>value1){
    console.log(value2," Is Greater than ",value1);
}
else{
    console.log("Both are equal")
}