const User = require("../models/User");
const Outreach = require("../models/Outreach");
const bcrypt = require("bcrypt");

const createNewSignupUser = async (req, res) => {
  const {
    user_id,
    lastname,
    firstname,
    email,
    password,
    roles,
    tenure,
    department,
  } = req.body;

  // Confirm data
  if (!user_id || !lastname || !firstname || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Check for duplicate user_id
  const duplicate = await User.findOne({ user_id })
    .collation({ locale: "en", strength: 2 })
    .lean()
    .exec();

  if (duplicate) {
    return res.status(409).json({ message: "Duplicate User ID" });
  }

  // Hash password
  const hashedPwd = await bcrypt.hash(password, 10); // salt rounds

  const userObject =
    !Array.isArray(roles) ||
    !roles.length ||
    !Array.isArray(department) ||
    !department.length ||
    !Array.isArray(tenure) ||
    !tenure.length
      ? { user_id, lastname, firstname, email, password: hashedPwd }
      : {
          user_id,
          lastname,
          firstname,
          email,
          password: hashedPwd,
          roles,
          tenure,
          department,
        };

  // Create and store new user
  const user = await User.create(userObject);

  if (user) {
    //created
    res.status(201).json({ message: `New user ${user_id} created` });
  } else {
    res.status(400).json({ message: "Invalid user data received" });
  }
};

module.exports = {
  createNewSignupUser,
};
