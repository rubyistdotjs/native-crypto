import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { formatMoney } from 'accounting';

export default function Currency({
  amount,
  precision,
  symbol,
  style,
}) {
  if (amount === null) return null;

  const amountFormatted = formatMoney(amount, {
    format: '%v %s',
    thousand: ' ',
    decimal: ',',
    symbol,
    precision,
  });

  return <Text style={style}>{amountFormatted}</Text>;
}

Currency.propTypes = {
  amount: PropTypes.number,
  precision: PropTypes.number,
  symbol: PropTypes.string.isRequired,
  style: Text.propTypes.style,
};

Currency.defaultProps = {
  amount: null,
  precision: 2,
  style: null,
};
