import { USER_DATA } from "@/constants";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userIdx } = req.query;

  if (!userIdx) {
    return res.status(400).json({ message: "Incorrect UserIdx" });
  }

  setTimeout(() => {
    const data = USER_DATA.find((user) => user.idx === Number(userIdx));

    if (data === undefined) {
      return res.status(400).json({ message: "No User" });
    }

    return res.status(200).json({ data });
  }, 3000);
}
