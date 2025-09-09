// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/Dashboard/Dashboard';
import DetailsScreen from './Screens/Details/Details';
import { useIsFocused } from '@react-navigation/native';
import Login from './Screens/Login/Login';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Dashboard"
          component={HomeScreen} 
         
          
        />
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
        />
        <Stack.Screen 
          name="Home" 
          component={Login} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
