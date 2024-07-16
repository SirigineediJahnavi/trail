import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import userRoute from "./routes/userRoutes.js";
import connectDatabase from "./model/dbConfig.js";
import mongoose from "mongoose"

const app = express();
//connectDatabase();
const allowedOrigins = ['http://localhost:5173', 'https://www.gocrosspe.com'];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/", userRoute);

app.get("/health", (req, res) => {
  res.status(200).json({ success: "Health is Ok" });
});

app.use((error, req, res, next) => {
  let { message } = error;
  console.error(error.stack);
  res.status(500).send(`Internal Server Error: ${message}`);
  next();
});

// connect to db
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT||3000, () => {
      console.log('connected to db & listening on port', process.env.PORT||3000)
    })
  })
  .catch((error) => {
    console.log(error)
  })