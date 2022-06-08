import { PrismaClient } from ".prisma/client";
import cookieParser from "cookie-parser";
import express from "express";
import { getISO, getStates, getTUGS, postRiskModel } from "./controllers";
import cors from "cors";

require("dotenv").config({ path: __dirname + "/.env" });

const PORT = 3001;

export const prisma = new PrismaClient();
export const app = express();

app.set("port", PORT);
app.use(cors({ origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req);
  console.log(res);
  next();
});
app.use((req, res, next) => {
  if (req.cookies.auth !== "shepherd") {
    res.status(403).send();
  }
  next();
});

app.post(`/api/risk`, postRiskModel);
app.get(`/api/iso`, getISO);
app.get(`/api/states`, getStates);
app.get(`/api/tugs`, getTUGS);

/**
 * Start Express server.
 */
app.listen(app.get("port"), () => {
  console.log(
    "  App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
  console.log("  Press CTRL-C to stop\n");
});
