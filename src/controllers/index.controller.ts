import { NextFunction, Request, Response } from 'express';
import UpholdBotService from '@services/uphold-bot.service';

class IndexController {
  public upholdBotService = new UpholdBotService();

  public index = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const currencyPair = req.params.currencyPair;
      const percentage = Number(req.params.percentage) || undefined;
      const interval = Number(req.params.interval) || undefined;
      await this.upholdBotService.checkPrice(currencyPair, percentage, interval);
      const userMessage = 'Welcome to the Uphold bot. Please see logs for price updates!'
      res.status(200).json({ message: userMessage });
    } catch (error) {
      next(error);
    }
  };
}

export default IndexController;
