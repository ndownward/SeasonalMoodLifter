import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { RootStackParams } from '../App';

const LandingScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // You can add your authentication logic here
    // console.log(`Username: ${username}, Password: ${password}`);
    navigation.navigate('Navigation');
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <Button title="Login" onPress={handleLogin} />
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="Register" onPress={handleRegister} />
        </View>
      </View>
      <View>
      <TouchableOpacity onPress={() => {navigation.navigate("ResetPassword")}}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 5,
  },
  forgotPassword: {
    color: 'blue', // You can customize the link color
    textDecorationLine: 'underline',
    marginTop: 5,
    marginBottom: 10,
  }
});

export default LandingScreen;
