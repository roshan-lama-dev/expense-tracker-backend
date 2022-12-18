import TransSchema from "./TransSchema.js";

// create user
export const createTrans = (newTransObj) => {
  return TransSchema(newTransObj).save();
};
// read user
// filter must be an object
export const getTeansByUserId = (userId) => {
  return TransSchema.findOne(useId);
};

// delete user
export const deleteTransByIds = (userId, idArg) => {
  return TransSchema.deleteMany({
    userId,
    _id: { $in: idArg },
  });
};
