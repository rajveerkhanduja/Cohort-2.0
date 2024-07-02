//Async Function
function findSum(n){
    let ans = 0;
    for(let i=0;i<n;i++){
      ans+=i;
    }
    console.log("Done");
    return ans;
}
function findSumTill100(){
  console.log(findSum(100));
}
setTimeout(findSumTill100, 1000);//Kamla Didi
console.log("Hello World");



//filesystem module
const fs = require("fs");
fs.readFile("a.txt", "utf-8", function(err, data){
  console.log(data);
});
console.log("Hi There");
let a=0;
//takes very long, longer than the file read
for(let i=0;i<10000000000;i++){
  a++;
}
console.log("Hi There 2");


//my own asynchronous function with promise
const fs = require("fs");
function rajveerReadFile(){
  return new Promise(function(resolve){
    fs.readFile("a.txt", "utf-8", function(err, data){
      resolve(data);
    });
  })
}
//callback function to call
function onDone(data){
  console.log(data);
}
rajveerReadFile().then(onDone);


//
const fs = require("fs");
function rajveerReadFile(cb){
  fs.readFile("a.txt", "utf-8", function(err, data){
    cb(data);
  });
}
function onDone(data){
  console.log(data);
}
rajveerReadFile(onDone);


// => pending, resolved, rejected
let p = new Promise(function(resolve){
    setTimeout(function(){
      resolve("resolved");
    },1000)
  });
  
  function callback(){
    console.log(p);
  } 
  console.log(p);
  p.then(callback);