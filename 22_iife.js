//immediately invoked function expression
// function fun(){
//     console.log("hello shubham kasaudhan");
// }
// fun()

(function fun(){
    console.log("hello shubham kasaudhan");
}
)();
// ()()  iife

// ( ()=>{
//     console.log("DB connected");
// })()
( (name)=>{
    console.log(`DB connected ${name}`);
})("shubham")