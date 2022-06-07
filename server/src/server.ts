import { PrismaClient } from ".prisma/client";
import cookieParser from "cookie-parser";
import express from "express";
import { getISO, getStates, getTUGS, postRiskModel } from "./controllers";

require("dotenv").config({ path: __dirname + "/.env" });

const PORT = process.env.PORT || 3001;

export const prisma = new PrismaClient();
export const app = express();

app.set("port", PORT);
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

app.post(`/risk`, postRiskModel);
app.get(`/iso`, getISO);
app.get(`/states`, getStates);
app.get(`/tugs`, getTUGS);

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
