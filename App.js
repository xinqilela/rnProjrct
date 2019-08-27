import React, {Fragment} from 'react';
import {Dimensions} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import HomePage from './view/Home/Home';
import MinePage from './view/Mine/Mine';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomePage,
    },
    Mine: {
      screen: MinePage,
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.white,
      },
      headerTintColor: Colors.white,
      headerTitleStyle: {
        color: Colors.black,
      },
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

export default App;
