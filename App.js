import { createStackNavigator, createAppContainer } from 'react-navigation';
import { header } from './styles/variables';

import CryptocurrenciesScreen from './screens/CryptocurrenciesScreen';

const AppNavigator = createStackNavigator(
  {
    Cryptocurrencies: CryptocurrenciesScreen,
  },
  {
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
  }
);

export default createAppContainer(AppNavigator);
