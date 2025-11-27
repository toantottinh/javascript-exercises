let passwork = prompt("Nhập mật khẩu:");
// Kiểm tra mật khẩu
// Mật khẩu mạnh (1. Ít nhất 6 ký tự, 2. Có ít nhất 1 chữ số)
if (passwork.length >= 6 && /\d/.test(passwork)) {
  console.log("Mật khẩu mạnh");
} else {
  console.log("Mật khẩu yếu");
}
