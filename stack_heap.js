// stack(primitive datatype)  heap(non-primitive)

let a=32
let b=a
b++
// console.log(a);
// console.log(b);

let obj1={
    name:"shubham",
    email:"user@google.com"
}
let obj2=obj1
obj2.email="shubham@google.com"
console.log(obj1.email);
console.log(obj2.email);