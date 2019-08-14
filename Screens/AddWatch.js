import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Container, Content} from 'native-base';

import AppHeader from './HeaderBack'

export default class AddWatch extends Component {
    render() {
        return (
          <Container>
            <AppHeader navigation={this.props.navigation}/>
            <Content>
              <Text>Add Watch Page</Text>
            </Content>
        </Container>
      )
    }
}
