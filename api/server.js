import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

// dynamic port
const PORT = process.env.PORT || 8000;

// connect mongo db
import { connectMongo } from "./src/config/dbConfig.js";
connectMongo();
// middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// ROuter
import userRouter from "./src/routers/userRouter.js";
import transactionRouter from "./src/routers/transactionRouter.js";
import { userAuth } from "./src/middleware/authMiddleWare.js";

app.use("/api/v1/user", userRouter);

app.use("api/v1/transaction", userAuth, transactionRouter);

// userRouter to handle the user registratyion and login
// transction router to hanlde all the transcation realted crud operatopn

// uncaught roruter request
app.use("*", (req, res, next) => {
  const error = {
    errorCode: 404,
    message: "Requested resources not found",
  };
  next(error);
});

// global error handler
app.use((error, req, res, next) => {
  try {
    const errorCode = error.errorCode || 500;
    res.status(errorCode).json({
      status: "error",
      message: error.message,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`The server in running in http://locahost:${PORT}`);
});
