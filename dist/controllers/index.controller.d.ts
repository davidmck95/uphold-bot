import { NextFunction, Request, Response } from 'express';
import UpholdBotService from '../services/uphold-bot.service';
declare class IndexController {
    upholdBotService: UpholdBotService;
    index: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
export default IndexController;
