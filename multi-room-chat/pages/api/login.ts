// pages/api/login.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key'; // Ensure to keep your secret key in .env

interface LoginRequestBody {
    username: string;
    password: string;
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { username, password }: LoginRequestBody = req.body;

    // In a real application, you'd have a database check here
    if (username === 'admin' && password === 'password') {
        const token = jwt.sign(
            { username }, 
            JWT_SECRET, 
            { expiresIn: '1h' }
        );
        res.status(200).json({ token });
    } else {
        res.status(401).json({ error: 'Invalid username or password' });
    }
}
