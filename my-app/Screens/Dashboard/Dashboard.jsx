import { View, Text,Button } from 'react-native'
import React from 'react'

export default function Dashboard() {
  return (
    <View>
      <Text>Welcome To Our App...</Text>
      <Button title='Go to Details' onPress={()=>alert('Button Pressed')}/>
    </View>
  )
}