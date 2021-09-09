//Calculate the sum of elements of an array of numbers

function arrSum(arr){
    if(arr.length===1) return arr[0];
    else {
        let lastVal = arr[arr.length-1];
        arr.pop();
        return (lastVal + arrSum(arr));
    }
}

let array = [5, 3, 6, 2, 8];

console.log(`arrSum(${array}): `, arrSum(array))