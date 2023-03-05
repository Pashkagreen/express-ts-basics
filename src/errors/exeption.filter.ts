import {NextFunction, Request, Response} from "express";
import {inject, injectable} from "inversify";
import {ILogger} from "../logger/logger.interface";
import {LoggerService} from "../logger/logger.service";
import {TYPES} from "../types";
import {IExeptionFilter} from "./exeption.filter.interface";
import {HTTPError} from "./http-error";
import "reflect-metadata";

@injectable()
export class ExeptionFilter implements IExeptionFilter {
  constructor(@inject(TYPES.ILogger) private logger: ILogger) {
    this.logger = logger;
  }

  catch(
    err: Error | HTTPError,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    if (err instanceof HTTPError) {
      this.logger.error(`Ошибка - ${err.message}, ${err.statusCode}`);
      res.status(err.statusCode).send({err: err.message});
    } else {
      this.logger.error(`Ошибка - ${err.message}`);
      res.status(500).send({err: err.message});
    }
  }
}
