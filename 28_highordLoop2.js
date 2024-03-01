const myobj={
    js:"javascript",
    cpp:"c++",
    html:"hyper text markup language",
    css:"cascading style sheet"
}
for(const key in myobj)
{
    // console.log(key,[key]);
}

const num=[1,2,3,4,5,6]
for(const key in num)
{
    // console.log([key]);
}

//maps are not iterable
const map=new Map()
map.set("name","shubham")
for(const [key,value] in map)
console.log(key);