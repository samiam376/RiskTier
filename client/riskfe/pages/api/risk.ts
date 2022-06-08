import type { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  var myHeaders = new Headers();
  myHeaders.append("Cookie", "auth=shepherd");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
  };

  const iso = req.query["iso"];
  const state = req.query["state"];
  const tug = req.query["tug"];

  const url = `http://localhost:3001/api/risk?iso=${iso}&state=${state}&tug=${tug}`;
  console.log(url);
  const response = await fetch(url, requestOptions);
  requestOptions;
  const resp = await response.json();
  console.log(resp);
  res.status(200).json(resp);
}
