
function calculateCartPrice(n1,n2,...order){
    return order
}
// console.log(calculateCartPrice(200));
// console.log(calculateCartPrice(200,300));
// console.log(calculateCartPrice(200,300,400));

const obj={
    name:"shubham",
    age:20,
    email:"shubham@gmail.com"
}
function handleobj(anyobject){
    console.log(`hello ${anyobject.name} and email is ${anyobject.email}`);
}
handleobj(obj)

handleobj({
    name:"sam",
    age:21,
    email:"s@google.com",
})
const arr=[1,2,3,4,5]
function get(geta){
    return geta[1]
}
console.log(get(arr))