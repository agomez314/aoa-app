import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './views/Home';
import DetailsPage from './views/DetailsPage';


const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    DetailsPage: {
      screen: DetailsPage,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />
  }
}
