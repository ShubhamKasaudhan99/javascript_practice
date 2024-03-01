//for of and for in loop
// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5]
for (const val of arr) {
    // console.log(`${val}`);
}

const greetings="hello shubham"
for (const char of greetings) {
    // console.log(`chracter of greetings ${char}`);
}

// map 
const map=new Map()
map.set("IN","india")
map.set("USA","america")
map.set("FR","france")
// console.log(map);

// for (const key of map) {
//     console.log(key);
// }

//this is called array destructuring in js

for (const [key,value] of map) {
    // console.log(key,":->",value);

    //maps are iterable in js.
}


const myobj={
    game1:"gta",
    game2:"zombiee"
}
//objects are not iterable
// for (const [key,value] of myobj) {
//     console.log(key);
// }