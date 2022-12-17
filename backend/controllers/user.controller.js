const { user } = require("../models/user.model");

const createuser = async (body) => {
    const data = await user.create(body);
    return data
};

const login = async (body) => {
    const data = await user.findOne({ email: body.email });
    if (data && data.password !== body.password) {
      return "Incorrect Password";
    } else {
    return data;
    }
};

const fetchusers = async () => {
    const data = await user.find();
    return data
};

const update = async (id, body) => {
    const data = await user.findByIdAndUpdate(id, body);
    return data
};
const fetchuserbyemail = async (email) => {
  const data = await user.findOne({email: email});
  return data;
};

module.exports = {
  createuser,
  fetchusers,
  update,
  login,
  fetchuserbyemail,
};
