import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import Home from '../components/navigation/Home';
import Recommendations from '../components/navigation/Recommendations';
import Profile from '../components/navigation/Profile';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../App';

const homeImage = require('../images/Home.png');
const heartImage = require('../images/heart.png');
const profileImage = require('../images/profile.png');

const Tab = createBottomTabNavigator();

const NavigationScreen = () => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <>
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
      </Tab.Navigator>
    </>
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

export default NavigationScreen;