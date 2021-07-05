"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const uphold_bot_service_1 = tslib_1.__importDefault(require("../services/uphold-bot.service"));
class IndexController {
    constructor() {
        this.upholdBotService = new uphold_bot_service_1.default();
        this.index = async (req, res, next) => {
            try {
                const price = await this.upholdBotService.checkPriceSer();
                res.sendStatus(200).json({ data: price, message: 'New price movement!' });
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.default = IndexController;
//# sourceMappingURL=index.controller.js.map