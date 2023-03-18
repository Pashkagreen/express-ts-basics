import { NextFunction, Request, Response } from 'express';
import { User } from './user.entity';

export interface IUserController {
	login: (req: Request, res: Response, next: NextFunction) => void;

	register: (req: Request, res: Response, next: NextFunction) => void;

	info: (req: Request, res: Response, next: NextFunction) => void;
}
