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

const array1 = [19, 33, 7, 28, 30, 17, 33, 20, 24, 19, 19, 7];

console.log([...new Set(array1)].sort((a, b) => a - b));

const array = [14, 67, 24, 7, 14, 12, 33, 7, 67];

console.log(
  array
    .filter((item, index, self) => self.indexOf(item) === index)
    .sort((a, b) => a - b)
);

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
