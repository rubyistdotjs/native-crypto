import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { textColors, fontSizes, borderColors } from '../styles/variables';

import CryptocurrencyLogo from './CryptocurrencyLogo';
import CryptocurrencySublist from './CryptocurrencySublist';
import Trend from './Trend';
import Currency from './Currency';

export default class CryptocurrencyListItem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      expand: false,
    };

    this.handleTouch = this.handleTouch.bind(this);
  }

  handleTouch() {
    this.setState(prevState => ({ expand: !prevState.expand }));
  }

  render() {
    const {
      name,
      symbol,
      rank,
      price,
      percentChange24H,
    } = this.props.cryptocurrency;

    return (
      <TouchableOpacity style={styles.container} onPress={this.handleTouch}>
        <View style={styles.logo}>
          <CryptocurrencyLogo symbol={symbol} />
        </View>

        <View style={styles.content}>
          <View style={styles.container}>
            <View style={styles.heading}>
              <View style={styles.row}>
                <Text style={styles.symbol}>{symbol}</Text>
                <Text style={styles.name}>{name}</Text>
              </View>
              <View style={styles.row}>
                <Currency style={styles.price} amount={price} symbol="€" />
                {!this.state.expand && <Trend percent={percentChange24H} />}
              </View>
            </View>
            <Text style={styles.rank}>{rank}</Text>
          </View>

          {this.state.expand && (
            <View style={[styles.container, styles.sublist]}>
              <CryptocurrencySublist
                cryptocurrency={this.props.cryptocurrency}
              />
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  }
}

CryptocurrencyListItem.propTypes = {
  cryptocurrency: PropTypes.shape({
    name: PropTypes.string,
    symbol: PropTypes.string,
    rank: PropTypes.number,
    price: PropTypes.number,
    percentChange24H: PropTypes.number,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  logo: {
    marginTop: 18,
    marginBottom: 18,
    marginLeft: 16,
    marginRight: 16,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 16,
    borderBottomWidth: 1,
    borderBottomColor: borderColors.base,
  },
  heading: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  symbol: {
    color: textColors.primary,
    fontSize: fontSizes.base,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  name: {
    color: textColors.secondary,
    fontSize: fontSizes.base,
    lineHeight: 22,
    marginLeft: 4,
  },
  price: {
    color: textColors.primary,
    fontSize: fontSizes.base,
    lineHeight: 22,
    fontWeight: 'bold',
    marginRight: 8,
  },
  rank: {
    color: textColors.hint,
    fontSize: fontSizes.small,
    marginLeft: 'auto',
    alignSelf: 'center',
  },
  sublist: {
    marginTop: 8,
  },
});
