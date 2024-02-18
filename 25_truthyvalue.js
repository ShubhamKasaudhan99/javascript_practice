//falsy value
//0 -0 bigint 0n false "" NnN null undefined

//truthy value
//" " "0" "false" function(){} [] {} 

const emptyObj={}
if(Object.keys(emptyObj).length==0)
console.log("object is empty");
else
console.log("object is not empty");

//nullish coalscing operator ?? for avoid null or undefined
// const val=5??10
// const val=null??10
let val=5
 val=3??10
console.log(val);

//ternary operator
(9>2)? console.log("9 is greater than 2"):console.log("9 is less than 2");