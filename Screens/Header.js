import React, { Component } from "react";
import {
  Header,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text,
  View,
  Title
} from "native-base";

class AppHeader extends Component {
  render() {
    return (
      <Header >
        <Left>
          <Button transparent onPress={() => this.props.navigation.openDrawer()}>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>SOTC</Title>
        </Body>
        <Right>
          <Button transparent>
            <Text>WOTD</Text>
          </Button>
        </Right>
      </Header>
    );
  }
}

export default AppHeader;