import express from "express";
import { createUser, getSingleUser } from "../models/UserModel.js";
const router = express.Router();


router.all("/", (req, res, next) => {
  console.log("Got hit to  all router");
  next();
});

// creating new user
router.post("/", async (req, res, next) => {
  try {
    // console.log(req.body);

    const result = await createUser(req.body);
    console.log(result);
    result?._id
      ? res.json({
          status: "success",
          message: "New User has been added Successfully",
        })
      : res.json({
          status: "error",
          message: "New User cannot be created",
        });
  } catch (error) {
    // let message = error.message;
    if (error.message.includes("E11000 duplicate key error collection")) {
      error.errorCode = 200;
      error.message =
        "This email is already registered. Please use a new email";
    }
    next(error);

    console.log(error);
  }
});

// login user
router.post("/login", async (req, res, next) => {
  try {
    // console.log(req.body);

    const result = await getSingleUser(req.body);
    console.log(result);
    result?._id
      ? res.json({
          status: "success",
          message: "Login Successfully",
          result: {
            _id: result._id,
            email: result.email,
            name: result.name,
          },
        })
      : res.json({
          status: "error",
          message: "Invalid Login",
        });
  } catch (error) {
    next(error);
  }
});
// getting user profile

// deleting user profile

// updating user profile

export default router;
