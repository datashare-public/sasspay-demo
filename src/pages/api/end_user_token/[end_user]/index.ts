import { createEndUserToken } from "@datashare/react";
import { NextApiRequest, NextApiResponse } from "next";

const PRIVATE_KEY = process.env.DATASHARE_PRIVATE_KEY as string;

export default async function endUserToken(
  req: NextApiRequest,
  res: NextApiResponse<{ endUserToken: string }>
) {
  const endUserToken = await createEndUserToken({
    privateKey: PRIVATE_KEY,
    endUserId: req.query.end_user as string,
    organizationId: process.env.DATASHARE_ORGANIZATION_ID as string,
  });
  res.json({ endUserToken });
}
