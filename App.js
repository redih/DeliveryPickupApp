import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import Home from './screens/Home';
import LoginBox from './screens/LoginBox';
import Navigator from './routes/HomeStack';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <Navigator/>
  )
   
}
