import type { NextApiRequest, NextApiResponse } from 'next';
import { Method } from 'axios';
import serverServices from '@@src/apis/serverServices';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const features = req.query.features ? [...req.query.features] : [];
  delete req.query.features;
  const parameters = { ...req.query, ...req.body };
  const feature: any = serverServices.productsAPI[features[0] as never][req.method as Method];
  if (!feature) return res.status(404).send('API routes not found');

  try {
    const result = await feature(parameters);
    return res.status(200).send(result);
  } catch (error: any) {
    console.error(`[handler] ${error.statusCode} ${error.message}`, parameters);
    return res.status(error.statusCode).send({ message: error.message });
  }
}
