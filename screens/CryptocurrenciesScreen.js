import React from 'react';
import { StatusBar, View } from 'react-native';
import CryptocurrencyList from '../components/CryptocurrencyList';
import { statusBar, backgroundColors } from '../styles/variables';

export default class CryptocurrenciesScreen extends React.Component {
  static navigationOptions = {
    title: 'Crypto-monnaies',
  };

  render() {
    return (
      <View flew="1" backgroundColor={backgroundColors.base}>
        <StatusBar
          barStyle={statusBar.barStyle}
          backgroundColor={statusBar.backgroundColor}
        />
        <CryptocurrencyList />
      </View>
    );
  }
}
