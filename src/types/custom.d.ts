import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      user: string;
    }
  }
}

export interface CustomRequest extends Request {
  user: string;
}
