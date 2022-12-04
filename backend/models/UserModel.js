const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;
const validator = require("validator");
const { default: isEmail } = require("validator/lib/isEmail");

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

UserSchema.statics.signup = async function (email, password) {
  // validate email
  if (!validator.isEmail(email)) {
    throw Error("email must be valid");
  }
  //validate password strenth
  if (!validator.isStrongPassword(password)) {
    throw Error("password must be valid");
  }
  const emailExists = await this.findOne({ email });
  if (emailExists) {
    throw Error("email alrady exsists");
  }
  //salt
  const salt = await bcrypt.genSalt(12);
  //hashed password
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await this.create({ email, password: hashedPassword });
  return user;
};
UserSchema.statics.login = async function (email, password) {
  if (!email | !password) {
    throw Error("must provide Credentials");
  }

  // validate email
  if (!validator.isEmail(email)) {
    throw Error("email must be valid");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect Credentials");
  }

  const correctPassword = await bcrypt.compare(password, user.password);
  if (!correctPassword) {
    throw Error("Incorrect Credentials");
  }

  return user;
};
module.exports = mongoose.model("UserShcema", UserSchema);
