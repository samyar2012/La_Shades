import { NextApiRequest, NextApiResponse } from 'next';
import { addSubscriber } from '../../../api/newsletter';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    await addSubscriber(email);
    return res.status(200).json({ message: 'Successfully subscribed' });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return res.status(500).json({ 
      message: error instanceof Error ? error.message : 'Failed to subscribe'
    });
  }
} 