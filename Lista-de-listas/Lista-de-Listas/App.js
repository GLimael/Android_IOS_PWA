import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import HomeScreen from './src/HomeScreen';
import EditorLista from './src/EditorLista';
import ConteudoLista from './src/ConteudoLista';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="EditorLista" component={EditorLista} />
        <Stack.Screen name="ConteudoLista" component={ConteudoLista} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;