import express from "express";
import authrouter from "./routes/auth.js"

const app = express();
const port = 3000

app.use('/auth',authrouter)

app.listen(port,() => {
    console.log("app running on port 3000")
})