import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { HomeScreen } from '../../Home';
import { SettingsScreen } from '../../SettingsScreen';

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Settings: {
    screen: SettingsScreen,
  },
},
  {
    initialRouteName: 'Home',
  });

export default createAppContainer(AppNavigator);
