import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import Categories from './src/pages/Categories';
import Meals from './src/pages/Meals';
import Details from './src/pages/Details';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Kategori' component={Categories} options={{title:"Kategoriler"}} />
        <Stack.Screen name='Tarif' component={Meals} options={{title:"Yemek Tarifleri"}}/>
        <Stack.Screen name='Detay' component={Details} options={{title:"Nasıl Yapılır ?"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}