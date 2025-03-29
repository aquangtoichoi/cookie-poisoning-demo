const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

app.get("/", (req, res) => {
  const role = req.cookies.role;
  if (role === "admin") {
    res.send("🔒 Bạn là ADMIN!");
  } else {
    res.send("👤 Bạn là người dùng bình thường.");
  }
});

app.get("/login", (req, res) => {
  res.cookie("role", "user");
  res.send("✅ Đăng nhập thành công. Cookie role=user đã được gán.");
});

app.listen(3000, "0.0.0.0", () => {
  console.log("✅ Server chạy tại http://localhost:3000");
});

