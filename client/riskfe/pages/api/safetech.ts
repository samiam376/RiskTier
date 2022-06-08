import { NextApiRequest, NextApiResponse } from "next";

export type Tug = {
  techUsageGrade: number;
};

export type Tugs = Tug[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Tugs>
) {
  //routes api call to risk service
  //retries all techical usage grades

  var myHeaders = new Headers();
  myHeaders.append("Cookie", "auth=shepherd");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  const url = `http://localhost:3001/api/tugs`;
  console.log(url);
  const response = await fetch(url, requestOptions);
  requestOptions;
  const resp = await response.json();
  console.log(resp);
  //TODO: better error handling
  res.status(200).json(resp);
}
