const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SendOTP = require("../utils/OTPsender");
let otpStorage = {};

exports.loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin)
      return res.status(401).json({ error: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch)
      return res.status(401).json({ error: "Invalid email or password" });

    const token = jwt.sign({ adminId: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ error: "Login failed" });
  }
};

// exports.Addadmin = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const admin = await Admin.findOne({ email });
//     if (admin) return res.status(400).json({ error: "Admin already exists" });

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newAdmin = new Admin({ email, password: hashedPassword });
//     await newAdmin.save();

//     res.json({ message: "Admin added successfully" });
//   } catch (err) {
//     res.status(500).json({ error: "Server error" });
//   }
// };
