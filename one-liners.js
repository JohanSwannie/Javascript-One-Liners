//* Capitalize one word

const oneWord = "potatoes";

const capitalize = (word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`;

document.getElementById("p1").innerHTML = `${oneWord} now became ${capitalize(
  oneWord
)}`;

//* Capitalize each word in a sentence

const sentence = "the black bear eat potatoes";

const words = sentence.split(" ");

//* Longer Method

for (let i = 0; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase() + words[i].substring(1);
}

const newSentence1 = words.join(" ");

document.getElementById(
  "p2"
).innerHTML = `Long Method - ${sentence} became ${newSentence1}`;

//* Shorter Method

const newSentence2 = words
  .map((word) => {
    return word[0].toUpperCase() + word.substring(1);
  })
  .join(" ");

document.getElementById(
  "p3"
).innerHTML = `Shorter Method - ${sentence} became ${newSentence2}`;

//* Shortest Method

const newSentence3 = sentence.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
  letter.toUpperCase()
);

document.getElementById(
  "p4"
).innerHTML = `Shortest Method - ${sentence} became ${newSentence3}`;
