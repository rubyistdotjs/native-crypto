import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { orderBy } from 'lodash';
import api from '../api/cryptocurrencies';

import CryptocurrencyListItem from './CryptocurrencyListItem';

function CryptocurrencyList() {
  const [cryptocurrencies, setCryptocurrencies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCryptocurrencies = () => {
    setLoading(true);

    api
      .list({ currency: 'EUR', limit: 50 })
      .then(data => setCryptocurrencies(orderBy(data, 'rank')))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchCryptocurrencies();
  }, []);

  return (
    <FlatList
      data={cryptocurrencies}
      renderItem={({ item }) => (
        <CryptocurrencyListItem cryptocurrency={item} />
      )}
      keyExtractor={item => item.id.toString()}
      refreshing={loading}
      onRefresh={fetchCryptocurrencies}
    />
  );
}

export default CryptocurrencyList;
