//Anonymous function
function square(n){
    return n*n;
  }
  
  function cube(n){
    return n*n*n;
  }
  
  function sumOfSomething(a,b,type){
    console.log(type);
    return type(a)+type(b);
  }
  
  const result = sumOfSomething(1,2,function(n){
     return n*n*n;   
  });
  
  console.log(result);