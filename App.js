import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './Screens/Home';
import Profile from './Screens/Profile';
import About from './Screens/About';
import Schedule from './Screens/schedule';
import Login from './Screens/Login';
import Alaram from './Screens/Alaram';
import APICall from './Screens/apiCall';
import PostAPI from './Screens/postAPI';
import Register from './Screens/Register';
import CounterScreen from './Screens/redux/counterScreen';
import { Provider } from "react-redux";
import store from './Screens/redux/store/configureStore';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerShown: false,
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        headerShown: true,
        title: 'Profile'
      }
    },
    About: {
      screen: About,
      navigationOptions: {
        headerShown: true,
        title: 'About Us'
      }
    },
    Schedule: {
      screen: Schedule,
      navigationOptions: {
        headerShown: true,
        title: 'Schedule'
      }
    },
    Login: {
      screen: Login, navigationOptions: {
        headerShown: false
      }
    },
    Register: {
      screen: Register, navigationOptions: {
        headerShown: false
      }
    },
    Alaram: {
      screen: Alaram,
      navigationOptions: {
        headerShown: true,
        title: 'Alarams'
      }
    },
    APICall: {
      screen: APICall,
      navigationOptions: {
        headerShown: true,
        title: 'GET API'
      }
    },
    PostAPI: {
      screen: PostAPI,
      navigationOptions: {
        headerShown: true,
        title: 'POST API'
      }
    },
    CounterScreen: {
      screen: CounterScreen,
      navigationOptions: {
        headerShown: true,
        title: 'Redux Counter'
      }
    },
  },
  {
    initialRouteName: 'CounterScreen',
    // headerMode: 'none',
    // navigationOptions: {
    //   headerVisible: false,
    //  },

  },

);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <Provider store={store}>
    < CounterScreen /> 
  </Provider>;
  }
}