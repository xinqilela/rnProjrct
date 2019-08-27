import React from 'react';
import {View, Text} from 'react-native';

class NavigatorComponent extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.state.routeName,
    };
  };

  constructor(props) {
    super(props);
  }
}

export default NavigatorComponent;
