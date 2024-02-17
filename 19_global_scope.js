//global
let a=2
const b=3
var c=5
console.table([a,b,c]);

//scope
{
    let a=6
    const b=7
    var c=8
}
//so recomended thar dont use var for scope and global
console.table([a,b,c]);