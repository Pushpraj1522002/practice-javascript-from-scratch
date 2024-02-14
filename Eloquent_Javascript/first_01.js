function range(start, end){
    let arr = [];
    for(let i = start; i <= end; i++){
        arr.push(i);
    }
    return arr;
}

function sum(arr){
    return arr.reduce(function(a,b){
            return a+b;
        }, 0);
}


console.log(sum(range(1,10)));