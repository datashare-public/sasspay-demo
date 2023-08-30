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
    organizationId: "391b95c4-b379-4f1f-bcbb-5fbaf3e2e997",
  });
  res.json({ endUserToken });
}
