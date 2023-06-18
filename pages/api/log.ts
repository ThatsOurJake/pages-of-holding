import { NextApiRequest, NextApiResponse } from 'next';
import logger from '../../utils/logger';

const log = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.send(404);
  }

  const headers = req.headers;

  const { message } = JSON.parse(req.body);

  logger.info(message, { correlationId: headers['x-correlation-id']});

  return res.send(204);
};

export default log;
