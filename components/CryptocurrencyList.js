import React from 'react';
import { FlatList } from 'react-native';
import { orderBy } from 'lodash';
import api from '../api/cryptocurrencies';

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
    api
      .list({ currency: 'EUR', limit: 50 })
      .then(data => {
        this.setState({
          cryptocurrencies: orderBy(data, 'rank'),
          loading: false,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <FlatList
        data={this.state.cryptocurrencies}
        renderItem={({ item }) => (
          <CryptocurrencyListItem cryptocurrency={item} />
        )}
        keyExtractor={item => item.id.toString()}
        refreshing={this.state.loading}
        onRefresh={this.handleRefresh}
      />
    );
  }
}
