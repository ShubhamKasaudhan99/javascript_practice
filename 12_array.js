const arr1=[1,2,3,4,5]
const arr2=new Array(1,2,3,4,"shubham")
// console.log(arr1);
// console.log(arr2);

arr1.push(6)
arr1.pop()
arr1.unshift(0)
arr1.shift()
// console.log(arr1.includes(4))
// console.log(arr1.indexOf(3))

// const narr1=arr1
// narr1[0]=0
const narr1=arr1.join()
// console.log(narr1);
// console.log(typeof narr1);
// console.log(arr1);


const n1=arr1.slice(1,3)
console.log(n1);

const n2=arr1.splice(1,3)
console.log(arr1);
console.log(n2);