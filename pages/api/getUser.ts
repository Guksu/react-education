import type { NextApiRequest, NextApiResponse } from "next";

const USER_DATA = [
  {
    idx: 0,
    name: "FIRST_USER",
    age: 20,
  },
  {
    idx: 1,
    name: "SECOND_USER",
    age: 25,
  },
  {
    idx: 2,
    name: "THIRD_USER",
    age: 30,
  },
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userIdx } = req.query;

  if (!userIdx) {
    return res.status(400).json({ message: "inCorrect UserIdx" });
  }

  const data = USER_DATA.filter((data) => data.idx === Number(userIdx))[0];

  if (data === undefined) {
    return res.status(400).json({ message: "No User" });
  }

  return res.status(200).json({ data });
}
