"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPrice = void 0;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const checkPrice = async () => {
    const pair = 'USD-BTC';
    const price = await axios_1.default({
        method: 'GET',
        responseType: 'json',
        url: `https://api.uphold.com/v0/ticker/${pair}`
    });
    return price;
};
exports.checkPrice = checkPrice;
exports.default = exports.checkPrice;
//# sourceMappingURL=uphold-api.integration.js.map