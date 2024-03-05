let sentence =
  "karenne and grant are very friendly people, while brian is very unfriendly";

let words = sentence.split(" ");

let newSentence = words
  .map((word) => word[0].toUpperCase() + word.substring(1))
  .join(" ");

alert(newSentence);

// ------------------------------------------------------

const sentence3 = "they walked down the hill and reached the sea";

const words3 = sentence3.split(" ");

const newSentence3 = sentence3.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
  letter.toUpperCase()
);

document.getElementById(
  "p4"
).innerHTML = `Shortest Method - "${sentence3}" changed to --- ${newSentence3}`;
