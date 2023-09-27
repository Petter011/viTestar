import { StatusBar } from "expo-status-bar";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headlineContainer}>
        <Text style={styles.headline}>Lets make a shoppinglist!</Text>
        <Text style={styles.subtitle}>Add to the list</Text>
      </View>

        <View style={styles.buttonContainer}>
        <Button title="Press"
        color='purple'
        onPress={() => ("")}/>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center",
  },
  headlineContainer:{
flex: 1,
alignItems: 'center'
  },
  headline: {
    fontSize: 30,
    color: "blue",
    padding: 20
  },
  subtitle: {
    fontSize: 20,
    color: "blue",
    padding: 10,
    
  },
  buttonContainer: {
    paddingBottom: 10
  }
});
