import express from "express";
require("dotenv").config({ path: __dirname + "/.env" });

const PORT = process.env.PORT || 3000;
const app = express();
app.set("port", PORT);

export default app;
