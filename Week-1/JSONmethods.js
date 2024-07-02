//stringify
const user = {
    name: "rajveer",
    age: 20,
    gender: "male"
  }
  const stringifyFinalString = JSON.stringify(user);//converting object into a string
  //convert a JavaScript object into a string with JSON.stringify().
  //important## always send data in the form of string.
  console.log(stringifyFinalString);
  
  
  //parse
  const users = '{"name" : "rajveer", "age" : 24, "gender" : "male"}';
  const parseFinalString = JSON.parse(users);
  console.log(parseFinalString["gender"]);
  //Parse the data with JSON.parse(), and the data becomes a JavaScript object.  