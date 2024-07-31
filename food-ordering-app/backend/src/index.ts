import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());


// test route
app.get("/test", async (req: Request, res: Response) => {
    res.json("Server working");
})

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
.then(() => console.log("Connected to database!"))
.catch(() => console.log("Database not connected"));

app.listen(port, () => {
    console.log(`App Listening on port ${port}`)
})
