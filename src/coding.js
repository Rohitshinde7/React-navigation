const arr = [1, 2, 3, 4, 5, 6];
arr.reverse();
console.log(arr);

console.log("***************************************************");

console.log("Reverse String using for loop");
const str = "Rohit";
const revStr = [];

for (let i = str.length - 1; i >= 0; i--) {
  const value = str[i];
  revStr.push(value);
}
const newRevStr = revStr.join("");
console.log(newRevStr);

console.log("***************************************************");
console.log("Reverse String using spread operator");

const str2 = "Rakesh";

const strArr = [...str2];
strArr.reverse();
const finalStr = strArr.join("");

console.log(finalStr);

console.log("***************************************************");
console.log("Bubble Sort Demo");

const numbers = [23, 43, 10, 93, 4, 76, 32, 22, 0];
function bubbleSort(array) {
  const length1 = array.length;

  for (let i = 0; i < length1; i++) {
    for (let j = 0; j <= length1 - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}
console.log(bubbleSort(numbers));

console.log("***************************************************");
console.log("Middle Of Any Array");

//console.log("given Array : "`${numbers}`)
let midIndex = Math.floor(numbers.length / 2);
let midIndex2 = numbers.length / 2;

console.log(midIndex);

let midNum = numbers[midIndex];
console.log(midNum);

console.log("***************************************************");
console.log("Remove Duplicate from String");

function removeDuplicate(originalStr) {
  console.log("Given String is :", originalStr);
  const orgStr = originalStr.toLowerCase();
  let arrWithNoDuplicate = [];

  let dupStr1 = [...orgStr];

  for (let i = 0; i < dupStr1.length; i++) {
    if (!arrWithNoDuplicate.includes(dupStr1[i].toLowerCase())) {
      arrWithNoDuplicate.push(dupStr1[i]);
    }
  }
  const finalStr = arrWithNoDuplicate.join("");

  console.log("String after Duplicate removed : ", finalStr);
}
removeDuplicate("AAABBBCCCDDD");

console.log("***************************************************");
console.log(" Git Demo");
 

console.log("this is feature branch code");
console.log("need to add this code in main branch");

console.log("New code added for practice..");
console.log("")

console.log("***************************************************");
console.log(" Removed duplicate array elements from array");

const numArr = [1,2,3,4,5,6,7,3,6,2,8];

console.log(numArr)

let numArr1  = []
let numArr2 = []


for(let i = 0; i<numArr.length; i++){
    if(!numArr1.includes(numArr[i])){
numArr1.push(numArr[i])
    }
    else{
        numArr2.push(numArr[i])
    }
}


console.log(numArr1)
console.log(numArr2)
