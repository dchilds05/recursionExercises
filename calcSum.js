//Calculate the sum of natural number up to n

function calcSum(n){
    if (n===1) return 1;
    else return(n + calcSum(n-1));
}
let n=5;

console.log(`calcSum(${n}): `, calcSum(n));