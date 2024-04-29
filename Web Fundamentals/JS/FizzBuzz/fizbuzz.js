
// for(var i = 1; i<=100; i++){
//     if(i%3 == 0 && i%5 == 0){
//         console.log('FizzBuzz')
//     }
//     else if (i%5 == 0){
//         console.log('Buzz')
//     }
//     else if (i%5 == 0){
//         console.log('Fizz')
//     }
//     else{
//         console.log(i)
//     }
// }


// Given an array and a value cutoff, 
// return a new array containing only the values larger than cutoff.

// function highPass(arr, cutoff) {
//     var filteredArr = [];
//     if( typeof(cutoff) != 'number'){
//         console.log('Please compare the array with a number')
//         return filteredArr
//     }    
    
//     for (var i = 0; i<arr.length; i++){
//         if( typeof(arr[i])  != 'number'){
//             console.log("Skiping the value on index: "+ i + " -> " + arr[i]+". Its not a number")
//         }
//         else if (arr[i]> cutoff){
//             filteredArr.push(arr[i])
//         }
//     }

//     return filteredArr;
// }
// var result = highPass([6, 8, 2, '2',], 5);
// console.log(result); // we expect back [6, 8, 10, 9]


// function betterThanAverage(arr) {
//     var sum = 0;
//     for(var i = 0; i<arr.length; i++){
//         sum = arr[i]+ sum
//     }
//     var avg = sum / arr.length

//     var count = 0
//     for (var i=0; i<arr.length; i++){
//         if (arr[i]> avg){
//             count++
//         }
//     }

//     // calculate the average
   
//     // count how many values are greater than the average
//     return count;
// }
// var result = betterThanAverage([3,3,3,6]);
// console.log(result); // 


// function reverse(arr) {
//     length = arr.length
//     for(var i = 0; i<=length/2; i++){
//         temp = arr[i]
//         arr[i] = arr[length-1-i]
//         arr[length-1-i]=temp
//     }
//     return arr;
// }
   
// var result = reverse(["a", "b", "c", "d", "e","f"]);
// console.log(result); // we expect back ["e", "d", "c", "b", "a"]


function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    var lastNr = 23
    for(var i = 0; fibArr.length<n;i++){
        lastNr = fibArr[fibArr.length-1] + fibArr[fibArr.length-2]
        fibArr.push(lastNr)
    }
    // your code here
    return fibArr;
}
   
var result = fibonacciArray(5);
console.log(result); // we expect ba