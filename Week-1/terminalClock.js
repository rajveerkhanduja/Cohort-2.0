//to update the clock on the same place
function clearConsole(){
    process.stdout.write("\x1B[2J\x1B[0f");
}

//clock function 
function clock(){
    const now = new Date();

    const hours = String(now.getHours()).padStart(2,"0");
    const minutes = String(now.getMinutes()).padStart(2,"0");
    const seconds = String(now.getSeconds()).padStart(2,"0");

    const dateString=now.toDateString();

    clearConsole();
    console.log(dateString + "\n" + hours + ":" + minutes + ":" + seconds);
}

const intervalId = setInterval(clock, 1000);
//to stop clock press ctrl+c or it wil stop after 10 sec.
setTimeout(() => {
    clearInterval(intervalId);
    console.log("Clock Stopped After 10 seconds");
}, 10000);