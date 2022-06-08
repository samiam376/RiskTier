import { NextApiRequest, NextApiResponse } from "next";

export type Iso = {
  code: string;
};

export type IsoData = Iso[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IsoData>
) {
  //reroutes fetch request to risk service
  //fetch all possible iso codes

  //set shepherd auth cookie for access
  var myHeaders = new Headers();
  myHeaders.append("Cookie", "auth=shepherd");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  const url = `http://localhost:3001/api/iso`;
  console.log(url);
  const response = await fetch(url, requestOptions);
  requestOptions;
  const resp = await response.json();
  console.log(resp);

  //TODO: better error handling
  res.status(200).json(resp);
}
