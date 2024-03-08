const array1 = [12, 29, 51, 10, 12, 49, 22, 29, 10, 7, 18, 12];

const object1 = {};

for (item of array1) {
  object1[item] = true;
}

console.log(`array1 without duplicates using object = ${Object.keys(object1)}`);

console.log(
  `array1 without duplicates using Set = ${[...new Set(array1)].sort(
    (a, b) => a - b
  )}`
);

const array2 = [];

let saveIt;

array1.sort((a, b) => a - b);

for (let i = 0; i < array1.length; i++) {
  if (array1[i] !== saveIt) {
    array2.push(array1[i]);
    saveIt = array1[i];
  }
}

console.log(`array1 without duplicates using saved variable = ${array2}`);

const array3 = [18, 25, 9, 13, 7, 20, 9, 27, 33, 7, 18, 13];

let array4 = [];

for (let i = 0; i < array3.length; i++) {
  if (array4.indexOf(array3[i]) === -1) {
    array4.push(array3[i]);
  }
}

console.log(
  `array3 without duplicates using indexOf = ${array4.sort((a, b) => a - b)}`
);

let array5 = [];

array3.forEach((item) => (!array5.includes(item) ? array5.push(item) : null));

console.log(
  `array3 without duplicates using forEach = ${array5.sort((a, b) => a - b)}`
);

const removeDuplicates1 = array3
  .reduce((pValue, cValue) => {
    !pValue.includes(cValue) ? pValue.push(cValue) : null;
    return pValue;
  }, [])
  .sort((a, b) => a - b);

console.log(`array3 without duplicates using reduce = ${removeDuplicates1}`);

const removeDuplicates2 = array3
  .filter((item, index, self) => self.indexOf(item) === index)
  .sort((a, b) => a - b);

console.log(`array3 without duplicates using filter = ${removeDuplicates2}`);

// console.log(_.uniq([1, 12, 9, 3, 4, 5, 6, 4, 3, 2, 1]));

const array6 = [true, 19, "city", false, 18.55, true, "yes", "no", true];

const howManyTimes = (array6, value) =>
  array6.reduce(
    (pValue, cValue) => (cValue === value ? pValue + 1 : pValue),
    0
  );

console.log(
  `array6 with value true appears ${howManyTimes(array6, true)} times`
);
