//To calculate the time it takes between a setTimeout cal and the inner function actually running.

const startTime = Date.now();
setTimeout(() => {
    const endTime = Date.now();
    
    const timeDifference = endTime-startTime;
    console.log(timeDifference);
},1000);