import { API, graphqlOperation } from "aws-amplify";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { listMoodLifters } from "../../src/graphql/queries";
import { useEffect, useState } from "react";
import { ListMoodLiftersQuery } from "../../src/API";
import { GraphQLQuery } from '@aws-amplify/api';
import * as queries from '../../src/graphql/queries';
import awsmobile from "../../src/aws-exports";

import { AppRegistry } from 'react-native';
// import { name as appName } from './app.json';
// import { initializeApp } from '@react-native-firebase/app'

export default function Recommendations() {
  console.log("in the log from Recommendationss.tsx!");
  console.log("testinggggg!");

  // const firebaseConfig = {
  //   apiKey: 'YOUR_API_KEY',
  //   authDomain: 'YOUR_AUTH_DOMAIN',
  //   databaseURL: 'YOUR_DATABASE_URL',
  //   projectId: 'YOUR_PROJECT_ID',
  //   storageBucket: 'YOUR_STORAGE_BUCKET',
  //   messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  //   appId: 'YOUR_APP_ID',
  // };
  
  // initializeApp(firebaseConfig);

  // const [moodLifters, setMoodLifters] = useState([]);

  // useEffect(() => {
  //   fetchMoodLifters()
  // }, []);

  // const fetchMoodLifters = async() => {
  //   console.log("before API call");
  //   console.log("before API call");

    // try {
    //   console.log("testingg!");
    //   // const moodLifterData: any = await API.graphql(graphqlOperation(listMoodLifters));
    //   const moodLiftersData = await API.graphql<GraphQLQuery<ListMoodLiftersQuery>>(
    //     { query: queries.listMoodLifters });
    //   const moodLifterList : any = moodLiftersData?.data?.listMoodLifters?.items;
    //   console.log("moodLiftersData.data ", moodLiftersData?.data);
    //   console.log("moodLifterList: ", moodLifterList);
    //   console.log("test");
    //   setMoodLifters(moodLifterList);
    // }
    // catch (err) {
    //   console.log("error on fetching moodLifters", err);
    //   // return Promise.reject(err);
    // }


  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text>Favorites Screen Content Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tristique senectus et netus et malesuada fames ac. Augue eget arcu dictum varius. Diam quis enim lobortis scelerisque fermentum dui faucibus in. Auctor urna nunc id cursus. Aliquet lectus proin nibh nisl. Nisl pretium fusce id velit ut tortor pretium. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Facilisis magna etiam tempor orci. Amet nulla facilisi morbi tempus iaculis. Massa tincidunt nunc pulvinar sapien. Egestas erat imperdiet sed euismod. Consequat id porta nibh venenatis cras sed felis.

Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan. Libero id faucibus nisl tincidunt eget nullam non nisi. Euismod in pellentesque massa placerat duis ultricies lacus sed. Hendrerit dolor magna eget est lorem ipsum dolor sit. Augue interdum velit euismod in pellentesque massa placerat. Aenean et tortor at risus viverra. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Sagittis nisl rhoncus mattis rhoncus urna neque. Felis eget nunc lobortis mattis aliquam.

Sapien pellentesque habitant morbi tristique. Commodo odio aenean sed adipiscing diam. Fames ac turpis egestas integer eget aliquet nibh praesent tristique. Vestibulum morbi blandit cursus risus at ultrices mi. Vitae suscipit tellus mauris a. Ante metus dictum at tempor commodo. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Sed turpis tincidunt id aliquet risus. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Nulla facilisi nullam vehicula ipsum a arcu. Libero id faucibus nisl tincidunt eget nullam non. Integer enim neque volutpat ac tincidunt vitae semper quis. Vulputate ut pharetra sit amet aliquam id diam. Vulputate enim nulla aliquet porttitor lacus. Augue ut lectus arcu bibendum. Turpis massa sed elementum tempus egestas sed. Porttitor eget dolor morbi non arcu. Consequat mauris nunc congue nisi vitae suscipit tellus mauris. Turpis egestas sed tempus urna et pharetra pharetra massa massa. Velit aliquet sagittis id consectetur purus.

Adipiscing diam donec adipiscing tristique risus nec feugiat in. Commodo quis imperdiet massa tincidunt. Consequat interdum varius sit amet mattis. Orci eu lobortis elementum nibh tellus molestie nunc non blandit. Fringilla est ullamcorper eget nulla facilisi. Fames ac turpis egestas sed tempus urna et. Ipsum a arcu cursus vitae congue. Proin sagittis nisl rhoncus mattis rhoncus. Congue quisque egestas diam in arcu. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Amet purus gravida quis blandit turpis cursus in. Volutpat est velit egestas dui id. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Porttitor lacus luctus accumsan tortor posuere ac ut. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Eu volutpat odio facilisis mauris. In nibh mauris cursus mattis molestie a.

Est ullamcorper eget nulla facilisi etiam dignissim diam quis. Consectetur adipiscing elit duis tristique sollicitudin nibh. Bibendum enim facilisis gravida neque convallis a cras. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Ornare massa eget egestas purus viverra accumsan in nisl. Pretium vulputate sapien nec sagittis aliquam malesuada. Mi eget mauris pharetra et. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id leo in vitae turpis massa. Id aliquet lectus proin nibh.</Text>
        {/* Add more content here */}
        {/* ... */}
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