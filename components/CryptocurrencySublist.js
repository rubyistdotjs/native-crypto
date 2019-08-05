import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { textColors, fontSizes } from '../styles/variables';

import CryptocurrencySublistItem from './CryptocurrencySublistItem';
import Trend from './Trend';
import Currency from './Currency';

export default function CryptocurrencySublist({ cryptocurrency }) {
  const {
    symbol,
    circulatingSupply,
    maxSupply,
    percentChange1H,
    percentChange24H,
    percentChange7D,
  } = cryptocurrency;

  return (
    <View style={styles.container}>
      <CryptocurrencySublistItem label="Évolution 1h">
        <Trend percent={percentChange1H} />
      </CryptocurrencySublistItem>
      <CryptocurrencySublistItem label="Évolution 24h">
        <Trend percent={percentChange24H} />
      </CryptocurrencySublistItem>
      <CryptocurrencySublistItem label="Évolution 7j">
        <Trend percent={percentChange7D} />
      </CryptocurrencySublistItem>
      <View style={styles.divider} />
      <CryptocurrencySublistItem label="En circulation">
        <Currency
          amount={circulatingSupply}
          precision={0}
          symbol={symbol}
          style={styles.text}
        />
      </CryptocurrencySublistItem>
      {maxSupply && (
        <CryptocurrencySublistItem label="Maximum">
          <Currency
            amount={maxSupply}
            precision={0}
            symbol={symbol}
            style={styles.text}
          />
        </CryptocurrencySublistItem>
      )}
    </View>
  );
}

CryptocurrencySublist.propTypes = {
  cryptocurrency: PropTypes.shape({
    symbol: PropTypes.string,
    circulatingSupply: PropTypes.number,
    maxSupply: PropTypes.number,
    percentChange1H: PropTypes.number,
    percentChange24H: PropTypes.number,
    percentChange7D: PropTypes.number,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  text: {
    fontSize: fontSizes.small,
    color: textColors.base,
  },
  divider: {
    marginBottom: 8,
  },
});
