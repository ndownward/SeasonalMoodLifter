import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import NavigationScreen from "./Navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// this is a hook!
import { useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../App";

export default function LandingScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <ScrollView 
    contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
      <TouchableOpacity onPress={() => { 
        navigation.navigate('Navigation');
    }} style={styles.button}>
      <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
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
  button: {
    backgroundColor: "#007AFF", // Change to your desired button color
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFFFFF", // Change to your desired text color
    fontSize: 16,
  },
});