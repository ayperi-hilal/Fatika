import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import Categories from './src/pages/Categories';
import Repice from './src/pages/Recipe';
import Details from './src/pages/Details';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Kategori' component={Categories} />
        <Stack.Screen name='Tarif' component={Repice} />
        <Stack.Screen name='Detay' component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}