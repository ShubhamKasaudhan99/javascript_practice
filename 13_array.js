let arr1=[1,2,3,4]
let arr2=[5,6,7,8]
// arr1.push(arr2)
// console.log(arr1[4]);
// console.log(arr1);


// const arr=arr1.concat(arr2)

//spread operator
const arr=[...arr1,...arr2]
console.log(arr);

// const narr=[1,2,[3,4],5,[6,7,[8,9]]]
// const rnarr=narr.flat(Infinity)
// console.log(narr);
// console.log(rnarr);

// console.log(Array.isArray("shubham"));
// console.log(Array.from("shubham"));
// console.log(Array.from({name:"shubham"}));

const s1=10
const s2=20
const s3=33
console.log(Array.of(s1,s2,s3));