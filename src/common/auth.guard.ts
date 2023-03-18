import { NextFunction, Request, Response } from 'express';
import { CustomRequest } from '../types/custom';
import { IMiddleware } from './middleware.interface';

export class AuthGuard implements IMiddleware {
  execute(req: CustomRequest, res: Response, next: NextFunction): void {
    if (req.user) {
      return next()
    }
    res.status(401).send({error: 'Вы не авторизованы!'})
  }
}