import {Logger} from "tslog";

export class LoggerService {
  public logger: Logger;

  constructor() {
    this.logger = new Logger({
      type: "pretty",
      displayInstanceName: false,
      displayFilePath: "hidden",
      displayFunctionName: false,
      displayLoggerName: false,
    });
  }

  log(...args: unknown[]) {
    this.logger.info(...args);
  }
  error(...args: unknown[]) {
    this.logger.error(...args);
  }
  warn(...args: unknown[]) {
    this.logger.warn(...args);
  }
}
