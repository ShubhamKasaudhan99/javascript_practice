//function
function print(){
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
}
function add(n1,n2){
    console.log(n1+n2);
}
// print()
add(2,"3")

function user(username="samson"){
    return `${username} just logged in`
}
console.log(user("shubham"));