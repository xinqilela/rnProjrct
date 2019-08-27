import React from 'react';
import {View, Text} from 'react-native';

// import NavigatorComponent from '../Navigator/NavigatorComponent';

class Home extends React.Component {
  static navigationOptions = {
    title: 'home',
  };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

export default Home;
