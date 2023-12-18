/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
// import {} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Homescreen from '../screens/Homescreen';
import Home from '../assets/images/home.svg';
import Homeatv from '../assets/images/activehome.svg';
import Wishlst from '../assets/images/wishlist.svg';
import Wishlstatv from '../assets/images/activewishlist.svg';
import Historyy from '../assets/images/history.svg';
import Historyatv from '../assets/images/activehistory.svg';
import Profilee from '../assets/images/profile.svg';
import Profileatv from '../assets/images/activeprofile.svg';
import Wishlist from '../screens/Wishlist';
import History from '../screens/History';
import Profile from '../screens/Profile';

const Bottom = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 65,
          bottom: 0,
          display: 'flex',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Homescreen}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            color: '#6D6D6D',
            marginBottom: 5,
            bottom: 5,
            fontSize: 10,
            fontWeight: '500',
          },
          tabBarIcon: ({focused}) =>
            focused ? (
              <Homeatv width={25} height={25} top={5} />
            ) : (
              <Home width={25} height={25} top={5} />
            ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            color: '#6D6D6D',
            marginBottom: 5,
            bottom: 5,
            fontSize: 10,
            fontWeight: '500',
          },
          tabBarIcon: ({focused}) =>
            focused ? (
              <Wishlstatv width={25} height={25} top={5} />
            ) : (
              <Wishlst width={25} height={25} top={5} />
            ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            color: '#6D6D6D',
            marginBottom: 5,
            bottom: 5,
            fontSize: 10,
            fontWeight: '500',
          },
          tabBarIcon: ({focused}) =>
            focused ? (
              <Historyatv width={25} height={25} top={5}/>
            ) : (
              <Historyy width={25} height={25} top={5}/>
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            color: '#6D6D6D',
            marginBottom: 5,
            bottom: 5,
            fontSize: 10,
            fontWeight: '500',
          },
          tabBarIcon: ({focused}) =>
            focused ? (
              <Profileatv width={25} height={25} top={5}/>
            ) : (
              <Profilee width={25} height={25} top={5} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Bottom;

// const styles = StyleSheet.create({});
