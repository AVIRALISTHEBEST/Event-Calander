import React from 'react';
import LoginScreen from './Screens/Login';
import StackNavigator from './Navigation.js/StackNavigator';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

function App() {
  return <AppContainer />;
}

const SwitchNavigator = createSwitchNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    Stack: {
      screen: StackNavigator,
    },
  },
  { initialRouteName: 'Login' }
);
const AppContainer = createAppContainer(SwitchNavigator);
export default App;
