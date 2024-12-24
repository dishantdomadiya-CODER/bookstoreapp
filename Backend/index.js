import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();
app.use(cors())
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

//connect mongo

mongoose.connect('mongodb://localhost:27017/bookstore', {
    // Remove these options
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
})
.then(() => console.log("Connected to mongoDB"))
.catch(err => console.error("Could not connect to mongoDB", err));
//defining routes
app.use("/book", bookRoute);
app.use("/user",userRoute)

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})