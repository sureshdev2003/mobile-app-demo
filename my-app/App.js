// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/Dashboard/Dashboard';
import DetailsScreen from './Screens/Details/Details';
import PaymentMethod from './Screens/paymentMethod/PaymentMethod';

import Login from './Screens/Login/Login';
import RegisterScreen from './Screens/Register/Register';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Login} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="Dashboard" component={HomeScreen} />
    <Stack.Screen name="Payment" component={PaymentMethod} />
  </Stack.Navigator>
</NavigationContainer>

  );
}
