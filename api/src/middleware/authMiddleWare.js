import { getSingleUser } from "../models/UserModel.js";

export const userAuth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const user = await getSingleUser({ _id: authorization });
    if (user?._id) {
      next();
    }
    res.json({
      status: "error",
      message: "Unauthorized",
    });
  } catch (error) {
    next(error);
  }
};
