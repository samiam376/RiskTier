import { NextApiRequest, NextApiResponse } from "next";

export type State = {
  stateAbr: string;
};

export type StateData = State[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<StateData>
) {
  //routes api call to risk service
  //retrieves all possibles states

  //auth cookie
  var myHeaders = new Headers();
  myHeaders.append("Cookie", "auth=shepherd");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  const url = `http://localhost:3001/api/states`;
  console.log(url);
  const response = await fetch(url, requestOptions);
  requestOptions;
  const resp = await response.json();
  console.log(resp);
  //TODO: better error handling
  res.status(200).json(resp);
}
