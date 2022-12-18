import express from "express";
import {
  createTrans,
  getTeansByUserId,
} from "../models/transModel/TransModel.js";
import { createUser, getSingleUser } from "../models/UserModel.js";
const router = express.Router();

// creating new user
router.post("/", async (req, res, next) => {
  try {
    // console.log(req.body);

    const { authorization } = req.headers;
    console.log(authorization, req.body);
    return;
    const result = await createTrans(req.body);

    console.log(result);
    result?._id
      ? res.json({
          status: "success",
          message: "New Trnasaction has been added Successfully",
        })
      : res.json({
          status: "error",
          message: "New Transaction cannot be created",
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
// getting user specific transcatipon based in user uf profiled
router.get("/", async (req, res, next) => {
  try {
    // auth headers
    const result = await getTeansByUserId();
    console.log(result);

    res.json({
      status: "success",
      message: "New Trnasaction has been added Successfully",
      result,
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

// deleting user profile

// updating user profile

export default router;
