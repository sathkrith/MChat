// pages/api/verify.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const token = req.headers.authorization?.split(' ')[1] || '';
        jwt.verify(token, JWT_SECRET);
        res.status(200).json({ verified: true });
    } catch (error) {
        res.status(401).json({ verified: false, message: 'Invalid token' });
    }
}
