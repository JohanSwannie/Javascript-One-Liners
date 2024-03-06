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

for (let item of obj2) {
  for (let val in item) {
    console.log(`${val} : ${item[val]}`);
  }
}

const array1 = [19, 33, 7, 28, 30, 17, 33, 20, 24, 19, 19, 7];

alert([...new Set(array1)].sort((a, b) => a - b));

const array = [14, 67, 24, 7, 14, 12, 33, 7, 67];
alert(
  array
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort((a, b) => a - b)
);
