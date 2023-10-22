import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';;
import { useEffect, useState } from 'react';
// import Post from './components/Post';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/HomeScreen.js';
import { NavigationContainer } from '@react-navigation/native';
import Login from './pages/Login.js';

const Stack = createStackNavigator();

export default function App() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch('https://workshop.elyasasmad.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data)
      })//to prove data tu wujud
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    // justifyContent: 'center',
  },
});
