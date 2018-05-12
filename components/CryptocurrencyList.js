import React from 'react';
import { FlatList } from 'react-native';
import { mergeWith, omit, transform, camelCase, flatMap, orderBy } from 'lodash';

import CryptocurrencyListItem from './CryptocurrencyListItem';

export default class CryptocurrencyList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      cryptocurrencies: [],
      loading: true,
    };

    this.handleRefresh = this.handleRefresh.bind(this);
  }

  componentDidMount() {
    this.fetchCryptocurrencies();
  }

  handleRefresh() {
    this.setState({ loading: true });
    this.fetchCryptocurrencies();
  }

  fetchCryptocurrencies() {
    fetch('https://api.coinmarketcap.com/v2/ticker/?convert=EUR&limit=50')
      .then(res => res.json())
      .then((res) => {
        const cryptocurrencies = flatMap(res.data).map((crypto) => {
          const object = omit(crypto, 'quotes');
          const quote = crypto.quotes.EUR;

          return transform(mergeWith(object, quote), (obj, val, key) => {
            obj[camelCase(key)] = val;
          }, {});
        });

        this.setState({
          cryptocurrencies: orderBy(cryptocurrencies, 'rank'),
          loading: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <FlatList
        data={this.state.cryptocurrencies}
        renderItem={({ item }) => <CryptocurrencyListItem cryptocurrency={item} />}
        keyExtractor={item => item.id.toString()}
        refreshing={this.state.loading}
        onRefresh={this.handleRefresh}
      />
    );
  }
}
