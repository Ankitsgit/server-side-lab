const fs = require("fs");
// console.log(1);
// // blocking.... operation -sync
//  const result =fs.readFileSync("./contact.txt", "utf-8");
//  console.log(result);
// console.log(2);
// console.log(3);


 //non blocking- Asynchronous


console.log(1);

const likha =fs.readFile("./contact.txt", "utf-8", (error, likha )=>{
    if(error){
        console.log("Error" ,err);
    }else{
 console.log(likha);

    }
  });
console.log(2);
console.log(3);
console.log(4);

