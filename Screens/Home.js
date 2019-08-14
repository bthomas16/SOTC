import React, { Component } from 'react';
import styles from "../Components/Styles/ComponentStyles";
import { ScrollView, Alert,  Image, View} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
// import { Col, Row, Grid } from 'react-native-easy-grid';
import SortableGridView from 'react-native-sortable-gridview'
// import { Container, Text, Button } from 'native-base';

// import WatchCard from '../Components/Home/WatchCard'

import AppHeader from './Header'
import AppFooter from './FooterNav'

export default class App extends Component {
    static navigationOptions = {
        
    }
    render() {

        let watches = [{
            id: 1,
                name: 'test 1',
            value: '100',
            cardImgSrc: 'https://cdn.shopify.com/s/files/1/0627/5517/products/Chrono-S-Blue_Brown_460042b4-36c5-4056-9439-19c9cae80c80_2048x2048.jpg?v=1562803640'
          },
          {
            id: 2,
            name: 'test 2',
            value: '125',
            cardImgSrc: 'https://cdn.shopify.com/s/files/1/0627/5517/products/Chrono-S-Blue_Brown_460042b4-36c5-4056-9439-19c9cae80c80_2048x2048.jpg?v=1562803640'
          },
          {
            id: 3,
            name: 'test 3',
            value: '385',
            cardImgSrc: 'https://cdn.shopify.com/s/files/1/0627/5517/products/Chrono-S-Blue_Brown_460042b4-36c5-4056-9439-19c9cae80c80_2048x2048.jpg?v=1562803640'
          },
          {
            id: 4,
            name: 'test 4',
            value: '895',
            cardImgSrc: 'https://cdn.shopify.com/s/files/1/0627/5517/products/Chrono-S-Blue_Brown_460042b4-36c5-4056-9439-19c9cae80c80_2048x2048.jpg?v=1562803640'
          },
          {
            id: 5,
            name: 'test 5',
            value: '100',
            cardImgSrc: 'https://cdn.shopify.com/s/files/1/0627/5517/products/Chrono-S-Blue_Brown_460042b4-36c5-4056-9439-19c9cae80c80_2048x2048.jpg?v=1562803640'
          },
          {
            id: 6,
            name: 'test 6',
            value: '125',
            cardImgSrc: 'https://cdn.shopify.com/s/files/1/0627/5517/products/Chrono-S-Blue_Brown_460042b4-36c5-4056-9439-19c9cae80c80_2048x2048.jpg?v=1562803640'
          },
          {
            id: 7,
            name: 'test 7',
            value: '385',
            cardImgSrc: 'https://cdn.shopify.com/s/files/1/0627/5517/products/Chrono-S-Blue_Brown_460042b4-36c5-4056-9439-19c9cae80c80_2048x2048.jpg?v=1562803640'
          },
          {
            id: 8,
            name: 'test 8',
            value: '895',
            cardImgSrc: 'https://cdn.shopify.com/s/files/1/0627/5517/products/Chrono-S-Blue_Brown_460042b4-36c5-4056-9439-19c9cae80c80_2048x2048.jpg?v=1562803640'
          },
          {
            id: 9,
            name: 'test 9',
            value: '895',
            cardImgSrc: 'https://cdn.shopify.com/s/files/1/0627/5517/products/Chrono-S-Blue_Brown_460042b4-36c5-4056-9439-19c9cae80c80_2048x2048.jpg?v=1562803640'
          },
          {
            id: 10,
            name: 'test 10',
            value: '100',
            cardImgSrc: 'https://cdn.shopify.com/s/files/1/0627/5517/products/Chrono-S-Blue_Brown_460042b4-36c5-4056-9439-19c9cae80c80_2048x2048.jpg?v=1562803640'
          },
          {
            id: 11,
            name: 'test 11',
            value: '125',
            cardImgSrc: 'https://cdn.shopify.com/s/files/1/0627/5517/products/Chrono-S-Blue_Brown_460042b4-36c5-4056-9439-19c9cae80c80_2048x2048.jpg?v=1562803640'
          },
          {
            id: 12,
            name: 'test 12',
            value: '385',
            cardImgSrc: 'https://cdn.shopify.com/s/files/1/0627/5517/products/Chrono-S-Blue_Brown_460042b4-36c5-4056-9439-19c9cae80c80_2048x2048.jpg?v=1562803640'
          },
          {
            id: 13,
            name: 'test 13',
            value: '895',
            cardImgSrc: 'https://cdn.shopify.com/s/files/1/0627/5517/products/Chrono-S-Blue_Brown_460042b4-36c5-4056-9439-19c9cae80c80_2048x2048.jpg?v=1562803640'
          },
        ]

        // Created() {
        //      watches = API_CALL
        // }

       return( 
            <Container>
                <AppHeader navigation={this.props.navigation}/>
                <Content>
                    <ScrollView>
                        
                        <SortableGridView
                            data={
                                watches
                            }
                            numPerRow={3} // let each row has four items. Default is 3
                            aspectRatio={1.2} // let height = width * 1.2. Default is 1
                            gapWidth={8} // let the gap between items become to 8. Default is 16
                            paddingTop={8} // let container's paddingTop become to 8. Default is 16
                            paddingBottom={8} // let container's paddingBottom become to 8. Default is 16
                            paddingLeft={8} // let container's paddingLeft become to 8. Default is 16
                            paddingRight={8} // let container's paddingRight become to 8. Default is 16
                            onDragStart={() => {
                                console.log('CustomLayout onDragStart');
                            }}
                            onDragRelease={(data) => {
                                console.log('CustomLayout onDragRelease', data);
                            }}
                            renderItem={(item, index) => {
                            return (
                                <View uniqueKey={item.id} style={[styles.item, {backgroundColor: item.backgroundColor, alignItems: 'center'}]}
                                onTap={() => this.props.navigation.navigate('Authentication')}>
                                    <Image source={{uri: item.cardImgSrc}} style={{width: 125, height: 125}} />
                                </View>
                                )
                            }
                        }/>
                    </ScrollView>
                </Content>
                <AppFooter navigation={this.props.navigation}/>
            </Container>
            )
    }
}


