import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import NavigationScreen from "./Navigation";

export default function LandingScreen() {
  return (
    <ScrollView 
    contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
      <TouchableOpacity onPress={() => { Alert.alert("hey!")}} style={styles.button}>
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