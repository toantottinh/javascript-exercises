function isPrime(number) {
  if (number <= 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}
let n = Number(prompt("Nhập n:"));
let primeNumbers = [];
for (let i = 2; i <= n; i++) {
  if (isPrime(i)) {
    primeNumbers.push(i);
  }
}
console.log(`Các số nguyên tố từ 1 đến ${n} là: ${primeNumbers.join(", ")}`);
