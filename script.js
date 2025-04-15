
const numbers1 = [5,2,9,1,7];

function bubbleSort(arr) {
    let len = arr.length;
    for(let i = 0; i<len-1; i++){
        for(let j = 0; j<len-i-1; j++){
            if (arr[j]> arr[j+1]){

                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }return arr;
}
console.log(bubbleSort(numbers1));


starPattern(5);

function starPattern(rows){
    for(let i=1; i<=rows; i++){
        let space ="";
        for (let j = 1; j<= i; j++){
            space += "*";
        }
        console.log(space);
    }
}
          
    

const numbers = [4,8,15,16,23,42];
const indexvalue = 15;
const index = linearSearch(numbers,indexvalue);

function linearSearch(arr, target){
    for (let i = 0; i<arr.length; i++){
        if(arr[i] === target){
            return i;
        }
    }return -1;
}
console.log(index !== -1 ? ` the value is ${indexvalue}`: "not found");
    

    





