import React, { Component } from "react";
import {
  Footer,
  FooterTab,
  Button,
  Icon,
  Text
} from "native-base";

class AppFooter extends Component {
  render() {
    return (
        <Footer style={{borderTopWidth: 1, borderColor: 'white', backgroundColor: 'darkblue', height: '9%'}} >
            <FooterTab>
                <Button full>
                    <Icon name="watch" style={{fontSize: 35, textAlign: 'center', color: 'white'}}/>
                    <Text style={{textAlign: 'center', fontSize: 15, color: 'white' }}>Watch Time</Text>
                    
                </Button>
            </FooterTab>
            <FooterTab style={{borderWidth: 1, borderBottomWidth: 0, borderTopWidth :0,  borderColor: 'gray'}}>
                <Button full onPress={() => this.props.navigation.navigate('AddWatch')}>
                    <Icon name="md-add-circle" style={{fontSize: 35, textAlign: 'center', color: 'white'}}/>                   
                    <Text style={{textAlign: 'center', fontSize: 15, color: 'white'}}>Add a Watch</Text>
                </Button>
            </FooterTab>
            <FooterTab>
                <Button full>
                    <Icon name="md-book" style={{fontSize: 35, textAlign: 'center', color: 'white'}} />   
                    <Text style={{textAlign: 'center', fontSize: 15, color: 'white'}}>Discover</Text>
                </Button>
            </FooterTab>
        </Footer>
    );
  }
}

export default AppFooter;


