import { Request, Response } from 'express';

export const getMe = async (req: Request, res: Response) => {
    res.status(200).json(req.user);
};
