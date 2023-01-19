import { typeOf } from "react-is";

export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
  return nums.map((num) => num * num);
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
  let camelCased = words[0];
  for (var i = 1; i < words.length; i++) {
    camelCased += words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return camelCased;
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  let total = 0;
  people.forEach((person) => {
    total += person.subjects.length;
  });
  return total;
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
  return menu.some((item) => item.ingredients.includes(ingredient));
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
  var duplicates = [];
    for (var i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) !== -1 && duplicates.indexOf(arr1[i]) === -1) {
            duplicates.push(arr1[i]);
        }
    }
    return duplicates.sort();
}
