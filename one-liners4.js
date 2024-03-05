let sentence =
  "karenne and grant are very friendly people, while brian is very unfriendly";

let words = sentence.split(" ");

let newSentence = words
  .map((word) => word[0].toUpperCase() + word.substring(1))
  .join(" ");

alert(newSentence);
