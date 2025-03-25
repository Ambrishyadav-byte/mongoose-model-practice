import express from "express";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT || 4000;
const app = express();

app.get('/', (req, res) => {
    res.send("Server is running");
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
