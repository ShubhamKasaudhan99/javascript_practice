//this for current context
const user={
    username:"shubham kasaudhan",
    welcomemsg:function(){
        console.log(`${this.username},welcome to the website`);
        console.log(this);
    }
}
// user.welcomemsg()
// console.log(this);

//arrow function

const fun=()=>{
    console.log("hello shubham kasaudhan");
}
// fun()

//explicit return

// const add=(n1,n2)=>{
//     return n1+n2
// }

//implicit return

// const add=(n1,n2)=>(n1+n2)
const add=(n1,n2)=>({name:"shubham"})

console.log(add(2,4));