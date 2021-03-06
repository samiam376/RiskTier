import type { NextApiRequest, NextApiResponse } from "next";

type RiskData = {
  Rejection: boolean;
  RiskTier: number;
  ISORiskTier: number;
  StateRiskTier: number;
  TechUsageModifier: number;
  Referred: false;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RiskData>
) {
  //route risk api calls to risk service

  //auth coookie
  var myHeaders = new Headers();
  myHeaders.append("Cookie", "auth=shepherd");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
  };

  const iso = req.query["iso"];
  const state = req.query["state"];
  const tug = req.query["tug"];
  const yoe = req.query["yoe"];

  const url = `http://localhost:3001/api/risk?iso=${iso}&state=${state}&tug=${tug}&yoe=${yoe}`;
  console.log(url);
  const response = await fetch(url, requestOptions);
  requestOptions;
  const resp = await response.json();
  console.log(resp);
  //TODO: better error handling
  res.status(200).json(resp);
}
