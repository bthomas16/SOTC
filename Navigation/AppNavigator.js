import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

import Authentication from '../Screens/Authentication';
import Home from '../Screens/Home';
import AddWatch from '../Screens/AddWatch';
import EditWatch from '../Screens/EditWatch';
import WatchDetail from '../Screens/WatchDetail';
import AppHeader from '../Screens//Header';

const stackNavConfig = {
  initialRouteName: 'Profile',
  headerMode: 'screen',
}

const DrawerNavigator = createDrawerNavigator({
  Logout: Authentication,
  Profile: Home,
  AddWatch: {
    screen: AddWatch,
    navigationOptions: {
      title: 'Add a Watch'
    }
  },
  EditWatch: {
    screen: EditWatch,
    navigationOptions: {
      title: 'Edit a Watch'
    }
  },
  // ManageNotifications: {
  //   screen: ManageNotifications,
  //   navigationOptions: {
  //     title: 'Manage App Notificiations'
  //   }
  // },
}, stackNavConfig);





// const MainNavigator = createStackNavigator({
//   Home: { screen: Home },
//   Authentication: { screen: Authentication },
//   AddWatch: { screen: AddWatch },
//   EditWatch: { screen: EditWatch },
//   WatchDetail: { screen: WatchDetail },
//   Drawer: Drawer
// }, stackNavConfig);

const AppNavigator = createAppContainer(DrawerNavigator);

export default AppNavigator;
