import { NextFunction, Response } from 'express';
import { CustomRequest } from '../types/custom';

export interface IMiddleware {
	execute: (req: CustomRequest, res: Response, next: NextFunction) => void;
}
