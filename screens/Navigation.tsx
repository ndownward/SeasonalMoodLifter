import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../components/navigation/Home';
import Recommendations from '../components/navigation/Recommendations';
import Profile from '../components/navigation/Profile';

const homeImage = require('../images/Home.png');
const heartImage = require('../images/heart.png');
const profileImage = require('../images/profile.png');

const Tab = createBottomTabNavigator();

export default function NavigationScreen() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} 
        options={{
          title: 'Home',
          tabBarIcon: ({size,focused,color}) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={homeImage}
              />
            );
          },
        }}
        />
        <Tab.Screen name="Recommendations" component={Recommendations} 
        options={{
          title: 'Recommendations',
          tabBarIcon: ({size,focused,color}) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={heartImage}
              />
            );
          },
        }}
        />
        <Tab.Screen name="Profile" component={Profile} 
        options={{
          title: 'Profile',
          tabBarIcon: ({size,focused,color}) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={profileImage}
              />
            );
          },
        }}
        />
        {/* <Tab.Screen name="Recommendations" component={Recommendations} />
        <Tab.Screen name="Profile" component={Profile} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});