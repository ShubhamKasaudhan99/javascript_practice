//dates
const d=new Date()
// console.log(d);
// console.log(d.toString());
// console.log(d.toLocaleString());
// console.log(d.toDateString());
// console.log(d.toTimeString());
// console.log(d.toLocaleDateString());
// console.log(d.toLocaleTimeString());
// console.log(d.toISOString());
// console.log(d.toJSON());


// const myCreatedDate=new Date(2023,0,20)
// const myCreatedDate=new Date(2023,0,20,5,3)
// const myCreatedDate=new Date("2024-01-14")
const myCreatedDate=new Date("01-14-2024")
// console.log(myCreatedDate.toString());

const myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Date.now());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));

// console.log(d.getDate());
// console.log(d.getDay());
// console.log(d.getMonth());

d.toLocaleString('default',{
    weekday:"long",
})
console.log(d.getDay())




