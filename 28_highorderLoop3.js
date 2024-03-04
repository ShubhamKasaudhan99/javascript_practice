const lang=["js","cpp","reactjs","c","css"]
// lang.forEach(function(name){
//     console.log(name);
// })

//callback function

lang.forEach((name)=>{
    // console.log(name);
})

function print(item){
    // console.log(item);
}
lang.forEach(print)

//arrow function

// lang.forEach((name,index,arr)=>{
//     console.log(name,index,arr);
// })

const arr=[
    {
        name:"javascript",
        fileName:"js"
    },
    {
        name:"c++",
        fileName:"cpp"
    },
    {
        name:"css",
        fileName:"css"
    },
]
arr.forEach((item)=>{
    console.log(item.name);
})