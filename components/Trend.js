import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { formatMoney } from 'accounting';
import { colors } from '../styles/variables';

export default function Trend({ percent, fontSize, iconSize }) {
  if (percent === null) return null;

  const percentRounded = parseFloat(percent).toFixed(2);
  const percentString = formatMoney(Math.abs(percentRounded), {
    format: '%v %s',
    symbol: '%',
    precision: 2,
    thousand: ' ',
    decimal: ',',
  });

  let color = colors.blueDark;
  let icon = 'trending-flat';
  if (percentRounded > 0) {
    color = colors.greenDark;
    icon = 'trending-up';
  } else if (percentRounded < 0) {
    color = colors.redDark;
    icon = 'trending-down';
  }

  return (
    <View style={styles.container}>
      <MaterialIcons name={icon} size={iconSize} color={color} />
      <Text style={[styles.text, { color, fontSize }]}>{percentString}</Text>
    </View>
  );
}

Trend.defaultProps = {
  percent: null,
  fontSize: 14,
  iconSize: 16,
};

Trend.propTypes = {
  percent: PropTypes.number,
  fontSize: PropTypes.number,
  iconSize: PropTypes.number,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    letterSpacing: 0.25,
    marginLeft: 4,
  },
});
