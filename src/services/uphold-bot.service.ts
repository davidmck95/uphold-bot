import * as upholdApi from '../integration/uphold-api.integration';
import * as store from '@/models/store.model';
import * as percentageCalculator from '@utils/percentageCalculator'
import { logger } from '@utils/logger'

class UpholdBotService {

  public async checkPrice(pair: string, percentage: number = 0.01, interval: number = 5) {
    setInterval(async () => {
      const price = await upholdApi.getTickersForCurrencyPair(pair);
      if (store.prices.size > 0 && store.prices.get(pair)) {
        const percentageMovement = percentageCalculator.calculatePriceMovementPercentage(store.prices.get(pair), price)
        if (percentageCalculator.shouldAlertPriceOscillation(percentageMovement, percentage)) {
          logger.info(`New price movement (${percentageMovement}%) for ${pair}! New price: $${price}`)
          store.prices.set(pair, price)
        }
      } else {
        store.prices.set(pair, price)
      }
    return price;
    }, interval * 1000)
  }
}

export default UpholdBotService;
