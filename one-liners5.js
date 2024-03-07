// Sort Objects in an array for numeric data

const obj1 = [
  {
    id: 129921,
    name: "Billy Bosbeer",
  },
  {
    id: 128914,
    name: "Gert Bosbeer",
  },
  {
    id: 127433,
    name: "Koos Bosbeer",
  },
  {
    id: 129983,
    name: "Lewies Bosbeer",
  },
];

let obj2 = obj1.sort((a, b) => (a["id"] > b["id"] ? 1 : -1));

// OR

// let obj2 = obj1.sort((a, b) => (a.id > b.id ? 1 : -1));

for (let item of obj2) {
  for (let val in item) {
    console.log(`${val} : ${item[val]}`);
  }
}

// Sort Objects in an array for string data

const object10 = [
  {
    name: "John",
    age: 25,
    career: "Boxing",
  },
  {
    name: "Luke",
    age: 22,
    career: "Plumbing",
  },
  {
    name: "Mary",
    age: 29,
    career: "Accounting",
  },
  {
    name: "Paul",
    age: 28,
    career: "Civil Engineering",
  },
  {
    name: "Gert",
    age: 33,
    career: "Project Management",
  },
];

const object11 = object10.sort((a, b) => (a.name > b.name ? 1 : -1));

for (item of object11) {
  for (value in item) {
    console.log(`${value} : ${item[value]}`);
  }
}

// Remove Duplicates in an array using SET

const array1 = [19, 33, 7, 28, 30, 17, 33, 20, 24, 19, 19, 7];

console.log([...new Set(array1)].sort((a, b) => a - b));

// Remove Duplicates in an array using FILTER

const array = [14, 67, 24, 7, 14, 12, 33, 7, 67];

console.log(
  array
    .filter((item, index, self) => self.indexOf(item) === index)
    .sort((a, b) => a - b)
);

// Remove Duplicates in an array using REDUCE

const array2 = [31, 29, 10, 45, 10, 12, 44, 31, 25, 29, 45, 7];

console.log(
  array2
    .reduce((pValue, cValue) => {
      if (!pValue.includes(cValue)) {
        pValue.push(cValue);
      }
      return pValue;
    }, [])
    .sort((a, b) => a - b)
);

// Remove Duplicates in an array using OLDER method 1

const array3 = [29, 18, 20, 7, 10, 29, 4, 14, 11, 7, 20, 40, 30, 7];

let array4 = [];

for (let i = 0; i < array3.length; i++) {
  if (array4.indexOf(array3[i]) === -1) {
    array4.push(array3[i]);
  }
}

console.log(array4.sort((a, b) => a - b));

// Remove Duplicates in an array using OLDER method 2

const array5 = [31, 3, 17, 9, 4, 10, 3, 19, 22, "Luke", 4, 31, 20];

let object12 = {};

for (let item of array5) {
  object12[item] = true;
}

console.log(Object.keys(object12));

// Remove Duplicates in an array using OLDER method 3

let array6 = [91, 45, 51, 67, 39, 81, 43, 67, 60, 91, 22, 51, 45];

array6.sort((a, b) => a - b);

let array7 = [];

let saveValue;

for (let i = 0; i < array6.length; i++) {
  if (array6[i] !== saveValue) {
    array7.push(array6[i]);
    saveValue = array6[i];
  }
}

console.log(array7);
