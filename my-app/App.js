// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/Dashboard/Dashboard';
import DetailsScreen from './Screens/Details/Details';
import { useIsFocused } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Welcome' }} 
        />
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
