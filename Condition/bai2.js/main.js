let n = Number(prompt("Nhập số năm bạn muốn kiểm tra:"));
if ((n % 4 === 0 && n % 100 !== 0) || n % 400 === 0) {
  console.log(`${n} là năm nhuận`);
} else {
  console.log(`${n} không phải là năm nhuận`);
}
