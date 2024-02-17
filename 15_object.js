//singleton
// const tinderUser=new Object()
// const tinderUser={}
// tinderUser.name="shubham"
// tinderUser.age=20
// console.log(tinderUser);

const regularUser={
    email:"shubham@chatgpt.com",
    age:20,
    fullName:{
        name:"shubham",
        lastName:"kasaudhan"
    }
}
// console.log(regularUser.fullName);

const obj1={
    a:1,
    b:2,
    c:3
}
const obj2={
    d:1,
    e:2,
    f:3
}
// const obj3={obj1,obj2}
// console.log(obj3)
// Object.assign(obj1,obj2)  
//source,destination
// console.log(obj1);
// const obj4=Object.assign({},obj1,obj2)  
// console.log((obj4));
// console.log((obj1));

// const obj3={...obj1,...obj2}
// console.log(obj3);

// console.log(Object.keys(regularUser));
// console.log(Object.values(regularUser));

console.log(Object.entries(regularUser));
console.log(regularUser.hasOwnProperty('isLoggedIn'));