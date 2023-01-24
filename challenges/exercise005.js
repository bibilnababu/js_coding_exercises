export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  const index = nums.findIndex((num) => num === n);
  return index === -1 || index === nums.length - 1 ? null : nums[index + 1];
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  let count = { 1: 0, 0: 0 };
  str.split('').map(val => count[val] = count[val] ? count[val]+1 : 1)
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
  return Object.values(haystack).some(val => typeof val === 'string' && val.toLowerCase().includes(searchTerm));
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  let words = str.toLowerCase().replace(/[^\w\s]/gi, "").split(" ");
  const frequencies = {};
  words.forEach(word => {
    frequencies[word] = (frequencies[word] || 0) + 1;
  });
  return frequencies;
};
