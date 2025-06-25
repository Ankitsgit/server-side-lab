  const fs = require("fs");
  

  //syncronous call
//   ./->>>> means current directory
    // fs.writeFileSync('./test.txt ','Hello world');
    // fs.writeFileSync('./test.txt ','Hey there');// it will ovride above text 


//Asyncronous - it has call back function also 

    // fs.writeFile("./test.txt","hello world Async", (err)=>{});

//read file 
//  const result =fs.readFileSync("./contact.txt", "utf-8");
//  console.log(result);


 // read file -Async- it will not return result directly 

//   const result =fs.readFile("./contact.txt", "utf-8");
//  console.log(result); //-error (ERR_INVALID_ARG_TYPE')

 // to get result use call back
//   const result =fs.readFile("./contact.txt", "utf-8", (error, result )=>{
//     if(error){
//         console.log("Error" ,err);
//     }else{
//  console.log(result);

//     }
//   });
 
// to append file
// Synchronous
// fs.appendFileSync('./test.txt', ` ${Date.now()},hey there \n`);

// Asynchronous
fs.appendFile('./test.txt', '\nMore data asynchronously', (err) => {
  if (err) throw err;
  console.log('Data appended.');
});


// Copy test.txt to copy.txt
fs.copyFileSync('./test.txt', './copy.txt');

// Delete copy.txt
fs.unlinkSync('./copy.txt');


// Get metadata of file
const stats = fs.statSync('./test.txt');
console.log('Is file?', stats.isFile());
console.log('Size:', stats.size, 'bytes');