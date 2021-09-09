//Calculate factorial of n. Reminder n! = 1 * 2 * ... * n

function fact(n){
    if(n===1) return 1;
    else return (n*fact(n-1));
}

let n = 6;

console.log(`fact(${n}): `, fact(n));