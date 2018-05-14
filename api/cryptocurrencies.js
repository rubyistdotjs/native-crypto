import URI from 'urijs';
import { flatMap, omit, mapKeys, mergeWith, camelCase } from 'lodash';

const endpoint = 'https://api.coinmarketcap.com/v2/ticker';

const transformCryptocurrency = (cryptocurrency, currency) => {
  const object = omit(cryptocurrency, 'quotes');
  const quote = cryptocurrency.quotes[currency];
  return mapKeys(mergeWith(object, quote), (v, k) => camelCase(k));
};

const transformCryptocurrencies = (cryptocurrencies, currency) =>
  flatMap(cryptocurrencies).map(c => transformCryptocurrency(c, currency));

export default {
  list: async ({ currency = 'EUR', start = 0, limit = 100 }) => {
    const url = URI(endpoint).query({ start, limit, convert: currency });
    const res = await fetch(url.toString());
    const json = await res.json();
    return transformCryptocurrencies(json.data, currency.toUpperCase());
  },

  get: async ({ id, currency = 'EUR' }) => {
    const url = URI(endpoint).segment(id).query({ convert: currency });
    const res = await fetch(url.toString());
    const json = await res.json();
    return transformCryptocurrencies(json.data, currency.toUpperCase());
  },
};
