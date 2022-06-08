import { Request, Response, NextFunction } from "express";
import { RiskOutput } from "./interfaces";
import { hueristics, riskTier } from "./risk";
import { prisma } from "./server";

//post request to use predictive model
export const postRiskModel = async (
  req: Request,
  res: Response,
  _next: NextFunction
): Promise<void> => {
  // parse inputs from request body
  // TODO: Add Validator
  const { iso, state, tug, yoe } = req.query;
  console.log(yoe);

  //find iso data
  const isoInput = await prisma.iSO.findUnique({
    where: {
      code: String(iso),
    },
  });

  //find state data
  const stateInput = await prisma.state.findUnique({
    where: {
      stateAbr: String(state),
    },
  });

  //find safetech data
  const safeTechInput = await prisma.safeTech.findUnique({
    where: {
      techUsageGrade: Number(tug),
    },
  });

  //TODO: more complex error handling, create standard errors, and abstract out logic
  if (isoInput === null || stateInput === null || safeTechInput === null) {
    const output: RiskOutput = {
      model: null,
      error: "DATA_NOT_FOUND",
    };
    res.json(output);
  } else if (Number(yoe) < isoInput.minYoe) {
    const output: RiskOutput = {
      model: null,
      error: "INVALID_YOE",
    };
    res.json(output);
  } else {
    const risk = riskTier(isoInput, stateInput, safeTechInput, hueristics);
    const output: RiskOutput = {
      model: risk,
      error: null,
    };
    res.json(output);
  }
};

//get request to see iso options
export const getISO = async (
  _req: Request,
  res: Response,
  _next: NextFunction
): Promise<void> => {
  const codes = await prisma.iSO.findMany({
    select: {
      code: true,
    },
  });
  res.json(codes);
};

//get request to see states options
export const getStates = async (
  _req: Request,
  res: Response,
  _next: NextFunction
): Promise<void> => {
  const states = await prisma.state.findMany({
    select: {
      stateAbr: true,
    },
  });
  res.json(states);
};

//get request to see tugs options
export const getTUGS = async (
  _req: Request,
  res: Response,
  _next: NextFunction
): Promise<void> => {
  const tugs = await prisma.safeTech.findMany({
    select: {
      techUsageGrade: true,
    },
  });
  res.json(tugs);
};
