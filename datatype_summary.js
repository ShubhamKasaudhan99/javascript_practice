/*
primitive datatype
string,int,bigInt,symbol,null,undefined,boolean

non-primitive datatype
object,array,function

*/
const a=12
const b=12.2
let c="shubham"
let d=true
let e=Symbol('123')
let f=Symbol('123')
let g;
let h=null
let i=1212123213213213213123n
// console.log(e===f);
console.log(typeof i);

let arr=[1,2,3,"shubham"]
// console.log(arr);

let myValue=function(){
    console.log("shubham");
}
console.log(typeof myValue);

let obj={
    name:"shubham",
    id:1,
}