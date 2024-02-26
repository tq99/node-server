const User = require("../models/collection");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { username, email, password, first_name, last_name } = req.body;
  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: "User already exists." });
    } else {
      const newUser = await User.create({
        username: username,
        email: email,
        password: password,
        first_name: first_name,
        last_name: last_name,
        address: "",
        city: "",
        country: "",
        postal_code: "",
        about_me: "",
      });

      return res
        .status(200)
        .json({ message: `${username} registered successfully` });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const currentUser = await User.findOne({ username });
    console.log(currentUser.password);

    if (currentUser) {
      if (password === currentUser.password) {
        const token = jwt.sign({ _id: currentUser._id }, "superkey123");
        res.status(200).json({ user: currentUser, token });
      } else {
        res.status(401).json({ error: "Incorrect password" });
      }
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.editProfile = async (req, res) => {
  const {
    username,
    first_name,
    last_name,
    email,
    address,
    city,
    country,
    postal_code,
    password,
  } = req.body;
  const userId = req.payload;

  try {
    const selectedUser = await User.findOne({ _id: userId });
    if (selectedUser) {
      selectedUser.username = username;
      selectedUser.first_name = first_name;
      selectedUser.last_name = last_name;
      selectedUser.email = email;
      selectedUser.address = address;
      selectedUser.city = city;
      selectedUser.country = country;
      selectedUser.postal_code = postal_code;
      selectedUser.password = password;

      await selectedUser.save();
      res.status(200).json(selectedUser);
    }
  } catch (err) {
    res.status(401).json("Profile edit api is not working");
  }
};
