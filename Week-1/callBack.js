function Arithmetic(a,b,type){
    const ans=type(a,b);//callBack
    return ans;
}

function sum(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

console.log(Arithmetic(21,31,sub));