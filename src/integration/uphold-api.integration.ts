import Ticker from '@/interfaces/ticker.interface'
import axios from 'axios'

export const getTickersForCurrencyPair = async (pair: string) => {
    try {
        const response = await axios.get(`https://api.uphold.com/v0/ticker/${pair}`)
        const data: Ticker = response.data
        return data.ask
    } catch (err) {
        console.error(JSON.stringify(err))
    }
}
