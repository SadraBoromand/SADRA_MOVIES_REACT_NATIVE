import React from 'react'
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import colors from './src/utils/colors';
import Home from './src/screens/Home'
import Favorites from './src/screens/Favorites';
import Profile from './src/screens/Profile';
import Search from './src/screens/Search';

import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SystemNavigationBar from 'react-native-system-navigation-bar';
import Detail from './src/screens/Detail';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator screenOptions={({ route }) => ({
    headerShown: false,
    tabBarIcon: ({ focused }) => {
      let icon;

      if (route.name === 'Home') {
        icon = focused
          ? require('./src/assets/tabs/home_active.png')
          : require('./src/assets/tabs/home.png');
      }
      else if (route.name === 'Search') {
        icon = focused
          ? require('./src/assets/tabs/search_active.png')
          : require('./src/assets/tabs/search.png');
      }
      else if (route.name === 'Favorites') {
        icon = focused
          ? require('./src/assets/tabs/fav_active.png')
          : require('./src/assets/tabs/fav.png');
      }
      else if (route.name === 'Profile') {
        icon = focused
          ? require('./src/assets/tabs/profile_active.png')
          : require('./src/assets/tabs/profile.png');
      }

      // You can return any component that you like here!
      return <Image style={styles.bnImage} source={icon} />
    },
    tabBarShowLabel: false,
    tabBarStyle: {
      borderTopColor: colors.black,
      backgroundColor: colors.black,
      borderTopColor: colors.white,
    }
  })}>
    <Tab.Screen name='Home' component={Home} />
    <Tab.Screen name='Search' component={Search} />
    <Tab.Screen name='Favorites' component={Favorites} />
    <Tab.Screen name='Profile' component={Profile} />
  </Tab.Navigator>
)

const App = () => {
  SystemNavigationBar.setNavigationColor('#000', 'light');

  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor='#000' barStyle={'light-content'} />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>

          <Stack.Screen name="Tabs" component={Tabs} />
          <Stack.Screen name='Detail' component={Detail} />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({
  bnImage: {
    width: 24,
    height: 24,
  },
})