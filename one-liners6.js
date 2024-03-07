const array1 = [12, 29, 51, 10, 12, 49, 22, 29, 10, 7, 18, 12];

const object1 = {};

for (item of array1) {
  object1[item] = true;
}

console.log(Object.keys(object1));

console.log([...new Set(array1)]);
