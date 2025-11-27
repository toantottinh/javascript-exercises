const input = prompt("Nhập các số cách nhau bằng dấu phẩy:");
const numbers = input.split(",").map((num) => parseFloat(num.trim()));
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(`Tổng các số đã nhập là: ${sum}`);
