import React, { useState } from 'react';
import { Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Amplify } from 'aws-amplify';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react-native';

import awsExports from './src/aws-exports';
Amplify.configure(awsExports);

import NavigationScreen from './screens/Navigation';
// import LandingScreen from './screens/Landing';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import RegisterScreen from './screens/Register';
// import ResetPasswordScreen from './screens/ResetPassword';
import Profile from './components/navigation/Profile';
import Home from './components/navigation/Home';
import Recommendations from './components/navigation/Recommendations';

const homeImage = require('./images/Home.png');
const heartImage = require('./images/heart.png');
const profileImage = require('./images/profile.png');
const happinessImage = require('./images/happiness.png');

export type RootStackParams = {
  Landing: any;
  Navigation: any;
  Register: any;
  ResetPassword: any;
  Profile: any;
  Home: any;
  Recommendations: any;
};

const Tab = createBottomTabNavigator();
const RootStack = createNativeStackNavigator<RootStackParams>();

function SignOutButton() {
  const { signOut } = useAuthenticator();
  return <Button title="Sign Out" onPress={signOut} />;
}

function App() {
  console.log("in the log from App.tsx!");
  const [loading, setLoading] = useState(false);

  return (
    <Authenticator.Provider>
      <Authenticator>
        <NavigationContainer>
          <RootStack.Navigator initialRouteName='Navigation'>
            <RootStack.Screen name="Profile" component={Profile} options={{headerShown: false}} />
            <RootStack.Screen name="Navigation" component={NavigationScreen} options={{headerShown: false}}/>
            <RootStack.Screen name="Recommendations" component={Recommendations} options={{headerShown: false}}/>
            {/* <RootStack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}}/> */}
            {/* <RootStack.Screen name="ResetPassword" component={ResetPasswordScreen} options={{headerShown: false}}/> */}
          </RootStack.Navigator>
        </NavigationContainer>
        <SignOutButton />
      </Authenticator>
      </Authenticator.Provider>
  );
}

export default App;