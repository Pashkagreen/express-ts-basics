import {NextFunction, Request, Response} from "express";
import {LoggerService} from "../logger/logger.service";
import {IExeptionFilter} from "./exeption.filter.interface";
import {HTTPError} from "./http-error";

export class ExeptionFilter implements IExeptionFilter {
  logger: LoggerService;

  constructor(logger: LoggerService) {
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
