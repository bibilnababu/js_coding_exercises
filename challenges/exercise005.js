export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === n) {
      if (i === nums.length - 1) {
        return null;
      } else {
        return nums[i + 1];
      }
    }
  }
  return null;
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  let count = { 1: 0, 0: 0 };
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "1") {
      count[1]++;
    } else if (str[i] === "0") {
      count[0]++;
    }
  }
  return count;
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  return parseInt(n.toString().split("").reverse().join(""));
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
  let sum = 0;
  arrs.forEach((subArr) => {
    subArr.forEach((num) => {
      sum += num;
    });
  });
  return sum;
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  if (arr.length < 2) {
    return arr;
  }
  let first = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = first;
  return arr;
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
  searchTerm = searchTerm.toLowerCase();
  for (let key in haystack) {
    if (
      typeof haystack[key] === "string" &&
      haystack[key].toLowerCase().includes(searchTerm)
    ) {
      return true;
    }
  }
  return false;
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  const frequencies = {};
  let words = str
    .toLowerCase()
    .replace(/[^\w\s]/gi, "")
    .split(" ");
  for (let i = 0; i < words.length; i++) {
    if (frequencies[words[i]] === undefined) {
      frequencies[words[i]] = 1;
    } else {
      frequencies[words[i]] += 1;
    }
  }
  return frequencies;
};
