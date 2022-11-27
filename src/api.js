import axios from 'axios';


const listCoin = axios.create({
    baseURL: 'https://api.coinpaprika.com' // 기본 path
});

// image search api
export const coinSearch = () => {
    return listCoin.get('/v1/tickers?quotes=KRW');
};
