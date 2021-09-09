//Find the nth Fibonacci number

function fib(n){
    if(n===1) return 0;
    if(n===2) return 1;
    else return (fib(n-1) + fib(n-2))
}

let n = 8;

console.log("fib(n): ", fib(n));