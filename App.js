import { createStackNavigator } from 'react-navigation';
import { header } from './styles/variables';

import CryptocurrenciesScreen from './screens/CryptocurrenciesScreen';

export default createStackNavigator({
  Cryptocurrencies: CryptocurrenciesScreen,
}, {
  initialRouteName: 'Cryptocurrencies',
  navigationOptions: {
    headerStyle: {
      backgroundColor: header.backgroundColor,
    },
    headerTintColor: header.tintColor,
    headerTitleStyle: {
      fontWeight: header.titleFontWeight,
    },
  },
});
