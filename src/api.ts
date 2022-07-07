const BASE_URL = "https://api.coinpaprika.com/v1";

export function fetchCoins(){
    // should return promise of json data
    return fetch(`${BASE_URL}/coins`).then(response => response.json());
}

export function fetchCoinInfo(coinID: string){
    return fetch(`${BASE_URL}/coins/${coinID}`).then(response => response.json());
}

export function fetchPriceInfo(coinID: string) {
    return fetch(`${BASE_URL}/tickers/${coinID}`).then(response => response.json());
}

export function fetchChartInfo(coinID: string) {
    return fetch(`https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinID}`).then(response => response.json());
}