// screens/DetailsScreen.js
import React from 'react';
import { View, Text } from 'react-native';

export default function DetailsScreen({ route }) {
  const { userId } = route.params || {};
  return (
    <View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
      <Text>Details Screen</Text>
      <Text>User ID: {userId}</Text>
    </View>
  );
}
