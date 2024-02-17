//scope  level
function one(){
    const name="javascript"
    function two(){
        const website="youtube"
        console.log(name);
    }
    // console.log(website);
    two()
}
one()
// console.log(name);

//function declaration
user();
function user(){
    console.log("hello shubham kasaudhan");
}
pr()
const pr=function(){
    console.log("hello shubham kasaudhan in user2");
}

//throws an error because of pr function
//before interpreting the js code all the function bind up in a doc.first fun is a real func
//and second function is a expression type fun so this is not bind up in doc