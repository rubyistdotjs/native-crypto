import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { header } from './styles/variables';

import CryptocurrenciesScreen from './screens/CryptocurrenciesScreen';

const AppNavigator = createStackNavigator(
  {
    Cryptocurrencies: CryptocurrenciesScreen,
  },
  {
    initialRouteName: 'Cryptocurrencies',
    defaultNavigationOptions: {
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
