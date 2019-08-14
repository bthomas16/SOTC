import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import AppHeader from './Header';

export default class Authentication extends Component {
    render() {
        return(
        <View>
          <AppHeader navigation={this.props.navigation}/>
        <Button
          title="Log In"
          onPress={() =>
            this.props.navigation.navigate('Profile')
          }
        />
      </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
