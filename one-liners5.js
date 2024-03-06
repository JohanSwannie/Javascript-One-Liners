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
    alert(`${val} : ${item[val]}`);
  }
}
