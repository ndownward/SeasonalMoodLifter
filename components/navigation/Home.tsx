import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScrollView, Text, View, StyleSheet, Pressable, Image } from "react-native";
import { RootStackParams } from "../../App";

const happinessImage = require('../../images/happiness.png');
const sadnessImage = require('../../images/sadness.png');

export default function Home() {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const happinessClicked = () => {
    navigation.navigate('Profile')
  }

  const sadnessClicked = () => {
    navigation.navigate('Recommendations')
  }
  
  return (
    <>
      <View>
        <Pressable onPress={happinessClicked}>
          <Image
          style={styles.emotionImage}
          source={happinessImage}
          ></Image>
        </Pressable>
        <Pressable onPress={sadnessClicked}>
          <Image
          style={styles.emotionImage}
          source={sadnessImage}
          ></Image>
        </Pressable>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text>Main Content Here</Text>
          {/* Add more content here */}
        </View>
      </ScrollView>
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
  emotionImage: {
    width: 250,
    height: 250
  },
});