import {Container} from "inversify";
import {App} from "./app";
import {ExeptionFilter} from "./errors/exeption.filter";
import {ILogger} from "./logger/logger.interface";
import {LoggerService} from "./logger/logger.service";
import {TYPES} from "./types";
import {UserController} from "./users/users.controller";

// const logger = new LoggerService();
// const app = new App(
//   logger,
//   new UserController(logger),
//   new ExeptionFilter(logger)
// );

const appContainer = new Container();
appContainer.bind<ILogger>(TYPES.ILogger).to(LoggerService);
appContainer.bind<ExeptionFilter>(TYPES.ExepctionFilter).to(ExeptionFilter);
appContainer.bind<UserController>(TYPES.UserController).to(UserController);
appContainer.bind<App>(TYPES.Application).to(App);

const app = appContainer.get<App>(TYPES.Application);
app.init();

export {app, appContainer};
