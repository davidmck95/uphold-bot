"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const uphold_api_integration_1 = tslib_1.__importDefault(require("../integration/uphold-api.integration"));
class UpholdBotService {
    async checkPriceSer() {
        const price = await uphold_api_integration_1.default();
        return price;
    }
}
exports.default = UpholdBotService;
//# sourceMappingURL=uphold-bot.service.js.map