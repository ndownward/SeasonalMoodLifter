import { ScrollView, Text, View, StyleSheet } from "react-native";
import { Button } from "@mui/material";
import NavigationScreen from "./Navigation";

export default function LandingScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Button variant="contained"
        onClick={() => {return <NavigationScreen />}}
        >Log In</Button>
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
});