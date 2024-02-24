import express, { Request, Response } from "express";
import dotenv from "dotenv";

import cors from "cors";
import connection from "./connecton";
const app = express();

dotenv.config();

app.use(cors());
app.get("/health", async (req: Request, res: Response) => {
    try {
        res.status(200).json({ message: "OK" });
    } catch (error) {
        res.status(500).json({ message: "NOT-OK" });
        console.log(error);
    }
})
app.listen(process.env.PORT, async () => {
    try {
        console.log("listening on port 5000...");

        await connection;
        console.log("connected to db")
    } catch (error) {
        console.log("something went to wrong");

    }
});