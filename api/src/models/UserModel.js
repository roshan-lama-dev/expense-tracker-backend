import UserSchema from "./UserSchema.js";

// create user

export const createUser = (newUserObj) => {
  return UserSchema(newUserObj).save();
};
// read user
// filter must be an object
export const getSingleUser = (filter) => {
  return UserSchema.findOne(filter);
};

// update user
export const findUserAndUpdate = (filter, udpateObj) => {
  return UserSchema.findOneAndUpdate(filter, udpateObj);
};

// delete user
export const deleteUserById = (_id) => {
  return UserSchema.findByIdAndDelete(_id);
};
