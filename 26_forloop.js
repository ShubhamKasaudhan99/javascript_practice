//for loop
// const n=23
// for (let i = 0; i < 10; i++) {
//     console.log(`${n}X${i+1}=${n*(i+1)}`);
// }

//break statement

// const n=23
// for (let i = 0; i < 10; i++) {
//     if(i==8)
//     {
//         console.log("breaked");
//         break;
//     }
//     console.log(`${n}X${i+1}=${n*(i+1)}`);
// }

//continue

const n=23
for (let i = 0; i < 10; i++) {
    if(i==8)
    {
        console.log("continued");
        continue
    }
    console.log(`${n}X${i+1}=${n*(i+1)}`);
}