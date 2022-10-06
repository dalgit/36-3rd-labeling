import React, {useEffect} from 'react';
// import { AsyncStorage } from 'react-native';
import LottieSplashScreen from 'react-native-lottie-splash-screen';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/screens/Login';
import MainScreen from './src/screens/MainScreen';
import Categorization from './src/screens/Categorization';

export const client = new ApolloClient({
  uri: 'http://www2.wecode.buzzntrend.com:4000/graphql',
  cache: new InMemoryCache(),
});
const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    LottieSplashScreen.hide();
  }, []);
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="MainScreen"
            options={{headerShown: false}}
            component={MainScreen}
          />
          <Stack.Screen name="Categorization" component={Categorization} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
