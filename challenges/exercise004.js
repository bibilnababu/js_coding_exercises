export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let smallNums = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 1) {
      smallNums.push(nums[i]);
    }
  }
  return smallNums;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  var filteredNames = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i][0].toUpperCase() === char.toUpperCase()) {
      filteredNames.push(names[i]);
    }
  }
  return filteredNames;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  var verbWords = [];
  for (var i = 0; i < words.length; i++) {
    if (words[i].includes("to ")) {
      verbWords.push(words[i]);
    }
  }
  return verbWords;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  var integers = [];
  for (let i = 0; i < nums.length; i++) {
    if (Number.isInteger(nums[i])) {
      integers.push(nums[i]);
    }
  }
  return integers;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  return users.map((user) => user.data.city.displayName);
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  return nums.map((num) => Number(Math.sqrt(num).toFixed(2)));
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  return sentences.filter(sentence => sentence.toLowerCase().includes(str.toLowerCase()));
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  return triangles.map(triangle => {
    return Math.max(...triangle);
  });
}
