import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class EditWatch extends Component {
    render() {
        return (
        <View style={styles.container}>
          <Text>Edit a Watch Page</Text>
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
  }
});
