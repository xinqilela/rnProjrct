import React from 'react';
import {View, Text} from 'react-native';

// import NavigatorComponent from '../Navigator/NavigatorComponent';

class Mine extends React.Component {
  static navigationOptions = {
    title: 'mine',
  };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Mine Screen</Text>
      </View>
    );
  }
}

export default Mine;
