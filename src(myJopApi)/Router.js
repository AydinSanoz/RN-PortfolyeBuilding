import  React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Intro, Job } from './Pages';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Job" component={Job} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;