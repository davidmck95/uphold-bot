import { Router } from 'express';
import IndexController from '@controllers/index.controller';
import Route from '@interfaces/routes.interface';

class IndexRoute implements Route {
  public path = '/uphold-bot';
  public router = Router();
  public indexController = new IndexController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    const indexRoute = `${this.path}/:currencyPair/:percentage?/:interval?`
    this.router.get(indexRoute, this.indexController.index);
  }
}

export default IndexRoute;
