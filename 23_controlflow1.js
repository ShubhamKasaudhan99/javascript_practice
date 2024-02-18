// const userLoggedIn=true
// const userLoggedIn=false
// if(userLoggedIn)
// {
//     console.log(`logged in ${userLoggedIn}`);
// }
// else
// {
//     console.log(`logged in ${userLoggedIn}`);
// }

//comparisions
//< > <= >= == === !=

// if (condition) {
    
// }
// else if (condition) {
    
// } else {
    
// }

const userLoggedIn=false
const debitCard=false
if(userLoggedIn&&debitCard)
console.log("allow user to buy the product");
else if(userLoggedIn&&!debitCard)
console.log("only allow add to cart");
else if(!userLoggedIn&&debitCard)
console.log("dont  allow anything");
else if(!userLoggedIn&&!debitCard)
console.log("dont  allow anything");
