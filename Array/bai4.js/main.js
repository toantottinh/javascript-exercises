function findMostFrequentNumber(arr) {
  const frequencyMap = {};
  let maxCount = 0;
  let mostFrequentNumber = null;
  for (const num of arr) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    if (frequencyMap[num] > maxCount) {
      maxCount = frequencyMap[num];
      mostFrequentNumber = num;
    }
  }
  return mostFrequentNumber;
}
let numbers = prompt("Nhập vào một dãy số, cách nhau bằng dấu phẩy:");
let numberArray = numbers.split(",").map(Number);
let mostFrequent = findMostFrequentNumber(numberArray);
console.log("Số xuất hiện nhiều nhất là:", mostFrequent);
