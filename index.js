"use strict"

// 1. Create a function to iterate over the following list [“John”,
// “Rohn”, “Danny”, “James”]

function iterateList(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
}
iterateList(["John", "Rohn", "Danny", "James"]);


// 2. Iterate over all the characters of the word “iNeuron”.

const word = "iNeuron";

for (let i = 0; i < word.length; i++) {
  console.log(word[i]);
}


//3. Create a functional iterator, with a next function.
function* countTo(n) {
  let i = 0;
  while (i < n) {
    yield i;
    i++;
  }
}

const iterator = countTo(5);

console.log(iterator.next());
console.log(iterator.next()); 
console.log(iterator.next()); 
console.log(iterator.next()); 
console.log(iterator.next()); 
console.log(iterator.next()); 


// 4) In the following two arrays find which two elements match
// using iterators.
// Array 1 - [“a”, “b”, “c”, “d”]
// Array 2 - [“e”, “f”, “g”, “h”, “a”, “i”, “j”]

const arr1 = ["a", "b", "c", "d"];
const arr2 = ["e", "f", "g", "h", "a", "i", "j"];

for (const elem1 of arr1) {
  for (const elem2 of arr2) {
    if (elem1 === elem2) {
      console.log(`Matching element: ${elem1}`);
    }
  }
}

// 5. What are the different ways of iterating through an array?
// demonstrate them.

//1-Using a for loop;

const arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}


//2-Using forEach():

const arr3 = [1, 2, 3];

arr3.forEach((elem) => {
  console.log(elem);
});

//3-Using map():

const arr4 = [1, 2, 3];

const newArr = arr4.map((elem) => {
  return elem * 2;
});

console.log(newArr);


//4-Using for...of:

const arr5 = [1, 2, 3];

for (const elem of arr5) {
  console.log(elem);
}

//5-Using for...in:

const arr6 = [1, 2, 3];

for (const index in arr6) {
  console.log(arr6[index]);
}
