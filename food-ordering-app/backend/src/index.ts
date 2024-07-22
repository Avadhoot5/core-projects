import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());


// test route
app.get("/test", async (req: Request, res: Response) => {
    res.json("Server working");
})



app.listen(port, () => {
    console.log(`App Listening on port ${port}`)
})
