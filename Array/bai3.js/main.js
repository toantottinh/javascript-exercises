const input = prompt("Nhập các số cách nhau bằng dấu phẩy:");
const numbers = input.split(",").map((num) => parseFloat(num.trim()));
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Các số chẵn là:", evenNumbers);
