import { Response, NextFunction } from 'express';
import { CustomRequest } from '../types/custom';
import { verify } from 'jsonwebtoken';
import { IMiddleware } from './middleware.interface';

interface JwtPayload {
	email: string;
}

export class AuthMiddleware implements IMiddleware {
	constructor(private secret: string) {}

	execute(req: CustomRequest, res: Response, next: NextFunction): void {
		if (req.headers.authorization) {
			const token: string = req.headers.authorization.split(' ')[1];
			
			const { email } = verify(token, this.secret) as JwtPayload;
			if (email) {
				req.user = email;
			} else {
				next();
			}
		}
		next();
	}
}
