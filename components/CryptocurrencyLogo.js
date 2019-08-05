import React from 'react';
import PropTypes from 'prop-types';
import { Image, View, StyleSheet } from 'react-native';
import { colors, borderRadius } from '../styles/variables';

import logos from '../database/cryptocurrencies-logos.json';

function CryptocurrencyLogo({ symbol, size }) {
  const logo = logos[symbol.toLowerCase()];

  if (logo) {
    return (
      <Image source={{ uri: logo }} style={{ width: size, height: size }} />
    );
  }

  return <View style={[styles.placeholder, { width: size, height: size }]} />;
}

CryptocurrencyLogo.propTypes = {
  symbol: PropTypes.string.isRequired,
  size: PropTypes.number,
};

CryptocurrencyLogo.defaultProps = {
  size: 40,
};

const styles = StyleSheet.create({
  placeholder: {
    backgroundColor: colors.greyLight,
    borderRadius: borderRadius.full,
  },
});

export default CryptocurrencyLogo;
