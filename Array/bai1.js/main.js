const input = prompt("Nhập các số, cách nhau bằng dấu phẩy:");
const numberArray = input.split(",").map(Number);
const maxNumber = Math.max(...numberArray);
console.log("Số lớn nhất trong mảng là:", maxNumber);
