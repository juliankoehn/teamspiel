import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  success: boolean;
};

type Error = {
  error: string;
};

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  const body: FormData = req.body;

  if (!body.email || !body.message || !body.firstName || !body.lastName) {
    return res.status(400).json({
      error: 'Missing required fields',
    });
  }

  res.status(200).json({ success: true });
}
