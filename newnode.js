
/////////////////////////////////
/*require function, read write, create  remove directory*/
////////////////////////////////
////////////////////////////////


// let node = require("./node");

// //console.log(node.count);
// node.counter();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let fs = require('fs');
const { encode } = require('punycode');

//read write syncronise

// let readsync = fs.readFileSync('readme.txt','utf-8');

// fs.writeFileSync('write.txt',readsync);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//read write asyncronise

// fs.readFile('readme.txt','utf-8',(err,data)=>{
//     fs.writeFile("write2.txt",data,(err)=>{
        
//     });
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////create directory, remove directory

// if(!fs.existsSync("./newdir")){
//     fs.mkdir("./newdir",(err)=>{
//         if(err) throw err;
//         console.log("New directory created");
//       });
// }else{
//   fs.rmdir("./newdir",(err)=>{
//     if(err) throw err;
//     console.log("directory removed");
//   });
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////remove file
// if(fs.existsSync("./newdir/newfile.txt")){
//     fs.unlink("./newdir/newfile.txt",()=>{
//       console.log("file removed");
//     });
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/// dirname , filename
// console.log(__dirname);
// console.log(__filename);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///readstream and writestream and pipestream (reading and writing file is stream that means using the data
// in the process of reading and writing even though read and write is not fully finished)

// const readstream = fs.ReadStream("./readme.txt", {encoding: "utf8"});
// const writestream = fs.WriteStream("./write.txt");
// const writestream2 = fs.WriteStream("./write2.txt");
// readstream.on("data",(chunk)=>{
//     // console.log("----------------------------------------------------------------NEW CHUNK-------------------------------------------------------------------------------------------------------");
//     // console.log(chunk);
//     writestream.write("\n------------------------------------------------------------------------------------------------------------new chunk-------------------------------/n");
//     writestream.write("\n------------------------------------------------------------------------------------------------------------new chunk-------------------------------/n");
//     writestream.write("\n------------------------------------------------------------------------------------------------------------new chunk-------------------------------/n");
//     writestream.write(chunk);

// });

// readstream.pipe(writestream2); // doing the exact same thing as above code in the hood. writing the data at the time of reading the file


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


