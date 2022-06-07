import { Request, Response, NextFunction } from "express";
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
  console.log("here");
  console.log(req.params);
  const { iso, state, tug } = req.query;

  console.log(iso);
  console.log(state);
  console.log(tug);

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

  //TODO: more complex error handling
  if (isoInput === null || stateInput === null || safeTechInput === null) {
    res.status(400).json({
      error: "data not found - better validation coming soon",
    });
  } else {
    const output = riskTier(isoInput, stateInput, safeTechInput, hueristics);
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
