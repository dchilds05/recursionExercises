// Calculate the value of n to the m power

function power(n, m){
    if (m===0) return 1;
    if (m===1) return n;
    else return n * power(n, m-1);
}

let j = 2;
let k = 3;

console.log(`power(${j},${k}): `, power(j,k));