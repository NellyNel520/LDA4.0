const { User } = require('../models')
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const Register = async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    // password: req.body.password,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.APP_SEC
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }

}

const Login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email, });
    !user && res.status(401).json("Wrong credentials!");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.APP_SEC
    );
    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    OriginalPassword !== req.body.password &&
      res.status(401).json("Wrong credentials!");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      
    );

    const { password, ...others } = user._doc;

    res.status(200).json({...others, accessToken});
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = {
  Register,
  Login

}