import { PrismaClient } from ".prisma/client";
import express from "express";
import cookieParser from "cookie-parser";

require("dotenv").config({ path: __dirname + "/.env" });

const PORT = process.env.PORT || 3000;

export const prisma = new PrismaClient();
export const app = express();

app.set("port", PORT);
app.use(cookieParser());
app.use(express.json());
app.use((req, res, next) => {
  if (req.cookies.auth !== "shepherd") {
    res.status(403).send();
  }
  next();
});
