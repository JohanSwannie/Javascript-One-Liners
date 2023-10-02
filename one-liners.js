//* Capitalize one word

const oneWord = "potatoes";

const capitalize = (word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`;

document.getElementById("p1").innerHTML = `${oneWord} now became ${capitalize(
  oneWord
)}`;

//* Capitalize each word in a sentence - Longer Method

const sentence = "the black bear eat potatoes";

const words = sentence.split(" ");

for (let i = 0; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase() + words[i].substring(1);
}

const newSentence1 = words.join(" ");

document.getElementById(
  "p2"
).innerHTML = `Long Method - "${sentence}" changed to --- ${newSentence1}`;

//* Capitalize each word in a sentence - Shorter Method

const sentence2 = "pinky the pink elephant eat bananas";

const words2 = sentence2.split(" ");

const newSentence2 = words2
  .map((word) => {
    return word[0].toUpperCase() + word.substring(1);
  })
  .join(" ");

document.getElementById(
  "p3"
).innerHTML = `Shorter Method - "${sentence2}" changed to --- ${newSentence2}`;

//* Capitalize each word in a sentence - Shortest Method

const sentence3 = "they walked down the hill and reached the sea";

const words3 = sentence3.split(" ");

const newSentence3 = sentence3.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
  letter.toUpperCase()
);

document.getElementById(
  "p4"
).innerHTML = `Shortest Method - "${sentence3}" changed to --- ${newSentence3}`;

//* Calculate percentage

let value = 39;
let total = 217;

document.getElementById("p5").innerHTML = `${value} is ${Math.round(
  (value / total) * 100
)}% of ${total}`;

//* Get a random element in an array

let array2 = [
  16,
  "Yes",
  "blue",
  false,
  39.4,
  "yellow",
  true,
  "Thomas",
  27,
  "Lucy",
];

const rndElement = array2[Math.floor(Math.random() * array2.length)];

document.getElementById(
  "p6"
).innerHTML = `A random element from array2 is ${rndElement}`;

//* Remove duplicates in an array

const array3 = [
  "Mary",
  "Joe",
  "Luke",
  "Peter",
  "Thomas",
  "Joe",
  "Mary",
  "Carl",
];

const newArray3 = (arr) => [...new Set(arr)];

document.getElementById(
  "p7"
).innerHTML = `Array without duplicate is [${newArray3(array3)}]`;

//* Sort elements by a certain property

const sortByProperty = (passedArray, key) =>
  passedArray.sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0));

let array4 = [
  { order: 4, item: "Buffalo" },
  { order: 2, item: "Hippopotamus" },
  { order: 3, item: "Rhinoceros" },
  { order: 1, item: "Elephant" },
];

let array5 = sortByProperty(array4, "order");

let array6 = [];

for (instance of array5) {
  for (value in instance) {
    array6.push(`${value}: ${instance[value]}`);
  }
}

document.getElementById("p8").innerHTML = array6;

//* Check if arrays are equal

const areTheyEqual = (arr1, arr2) =>
  JSON.stringify(arr1) === JSON.stringify(arr2);

let array7 = [3, 4, 5];
let array8 = ["3", 4, "5"];
let array9 = [10, 11, 12];
let array10 = [10, 11, 12];

document.getElementById(
  "p9"
).innerHTML = `Is array 7 and array 8 equal - ${areTheyEqual(array7, array8)}`;

document.getElementById(
  "p10"
).innerHTML = `Is array 9 and array 10 equal - ${areTheyEqual(
  array9,
  array10
)}`;

//* Count the number of specified occurences in an array

const numberOfElement = (arr, item) =>
  arr.reduce((a, val) => (val === item ? a + 1 : a), 0);

let array11 = ["blue", "Yellow", true, 19, "blue", "red", "false", "blue"];

document.getElementById(
  "p11"
).innerHTML = `The value 'blue' occurs ${numberOfElement(
  array11,
  "blue"
)} times in array11`;

//* How to wait for a certain amount of time before executing the next piece of code

const waitForIt = async (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

waitForIt(5000).then(
  () =>
    (document.getElementById(
      "p12"
    ).innerHTML = `<h4 style="font-size: 1.3rem">We have waited for 5 seconds and here we are now</h4>`)
);

//* Iterate quickly through objects to get properties

const getDetails = (objects, key) => objects.map((obj) => obj[key]);

const company = [
  { fullName: "Danny Brown", position: "Manager" },
  { fullName: "Mary Cooper", position: "Personal Assistant" },
  { fullName: "Luke Sidaway", position: "Software Developer" },
  { fullName: "David Frost", position: "Senior Manager" },
];

const fullNames = getDetails(company, "fullName");

const positions = getDetails(company, "position");

document.getElementById(
  "p13"
).innerHTML = `The people working in this company are ${fullNames} with positions like ${positions}`;

//* Insert an element at a certain position in an array - The long way

const insertElement = (arr, index, newElement) => [
  ...arr.slice(0, index),
  newElement,
  ...arr.slice(index),
];

let array20 = [
  "Auckland",
  "Wellington",
  27,
  true,
  "Nelson",
  "Kaiteriteri",
  "ChristChurch",
];

array20 = insertElement(array20, 2, "Hamilton");

document.getElementById(
  "p14"
).innerHTML = `The new array after inserting an element at index 2 is now ${array20}`;

//* Insert an element at a certain position in an array - The short way

let array21 = [1, "Yes", 27, "Luke Brown", true, 44, "Pinetown", "No"];

array21.splice(4, 0, "Mary Brown");

document.getElementById("p15").innerHTML = `The new array is now ${array21}`;
