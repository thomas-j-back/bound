import {createBottomTabNavigator} from 'react-navigation-tabs';

import HomeScreen from '_scenes/home';
import AboutScreen from '_scenes/about';
import StoryBookUI from '_storybook';

const TabNavigatorConfig = {
  initialRouteName: 'Home',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Home: {
    screen: HomeScreen,
  },
  About: {
    screen: AboutScreen,
  },
  Storybook: {
    screen: StoryBookUI,
  },
};

const AppNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default AppNavigator;
