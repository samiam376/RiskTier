import { Request, Response, NextFunction } from "express";
import { prisma } from "./app";
import { hueristics, riskTier } from "./risk";

export const postRiskModel = async (
  req: Request,
  res: Response,
  _next: NextFunction
): Promise<void> => {
  // parse inputs from request body
  // TODO: Add Validator
  const { iso, state, tug } = req.body;

  //find iso data
  const isoInput = await prisma.iSO.findUnique({
    where: {
      code: iso,
    },
  });

  //find state data
  const stateInput = await prisma.state.findUnique({
    where: {
      stateAbr: state,
    },
  });

  //find safetech data
  const safeTechInput = await prisma.safeTech.findUnique({
    where: {
      techUsageGrade: tug,
    },
  });
  safeTechInput?.techUsageGrade.toFixed;
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
