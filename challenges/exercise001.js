// Note: Be sure to check out all the exercises corresponding .md files (in docs)! 📘 👍

export function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // for capitalize the first letter
  return word.substring(0, 1).toUpperCase() + word.substring(1, word.length);
}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");

  //for capitalise the Initials
  return (
    firstName.substring(0, 1).toUpperCase() +
    "." +
    lastName.substring(0, 1).toUpperCase()
  );
}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");

  let TotalPrice = originalPrice + originalPrice * (vatRate / 100);
  return (TotalPrice = +TotalPrice.toFixed(2));
}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");

  let Price = originalPrice - originalPrice * (reduction / 100);
  return (Price = +Price.toFixed(2));
}

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");

  let position;
  let length;

  if (str.length % 2 == 1) {
    position = str.length / 2;
    length = 1;
  } else {
    position = str.length / 2 - 1;
    length = 2;
  }

  return str.substring(position, position + length);
}

export function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // to reverse word
  return word.split("").reverse().join("");
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // to reverse all words
  return words.map((word) => word.split("").reverse().join(""));
}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // return the count on linux users
  return users.filter((user) => user.type === "Linux").length;
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  //add the numbers of array
  let total = scores.reduce((a, b) => a + b, 0);
  total = total / scores.length;
  return (total = +total.toFixed(2));
}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  return n % 3 === 0 && n % 5 === 0
    ? "fizzbuzz"
    : n % 3 === 0
    ? "fizz"
    : n % 5 === 0
    ? "buzz"
    : n;
}
