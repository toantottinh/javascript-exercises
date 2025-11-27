let score = Number(prompt("Nhập điểm học sinh:"));
if (score < 0 || score > 10) {
  console.log("Điểm không hợp lệ");
} else if (score >= 8) {
  console.log("Học sinh đạt loại Giỏi");
} else if (score >= 6.5) {
  console.log("Học sinh đạt loại Khá");
} else if (score >= 5) {
  console.log("Học sinh đạt loại Trung bình");
} else {
  console.log("Học sinh đạt loại Yếu");
}
