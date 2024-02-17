//singleton
//object.create

//object literals

const mysym=Symbol("key1")
const jsUser={
    name:"shubham",
    email:"shubham@gmail.com",
    "full name":"shubham kasaudhan",
    [mysym]:"key",
    age:19,
    location:"gorakhpur",
    isLoggedIn:false,
    lastLoggedIn:["monday","friday"]
}
// console.log(jsUser);
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser[mysym]);
// console.log(jsUser["full name"]);


jsUser.age=20

// Object.freeze(jsUser)
//no changes applied after this.
jsUser.age=21
// console.log(jsUser);

jsUser.greeting=function(){
    console.log("hello js user");
}
jsUser.greeting2=function(){
    console.log(`hello js user ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());
