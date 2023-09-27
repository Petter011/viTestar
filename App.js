import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.headline}>This is a headline!!!!</Text>
      </View>
        <View style={styles.textView}>
        <Text style={styles.text}>
          Now we are gonna builde something awesome! 
        </Text>
        <Text style={styles.text}>
          Yay! I'm ready for you. Trying to create a Pull request now.
        </Text>
        <Text style={styles.text2}>
          What do you want to do?
        </Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center",
  },
  textView:{
flex: 1,
alignContent: 'center',
justifyContent: 'center'
  },
  text: {
    color: "red",
    fontSize: 20,
    alignContent: 'center'
    
  },
  headline: {
    fontSize: 30,
    color: "blue",
    padding: 20
  },
  text2: {
    padding: 20,
    color: "green",
    fontSize: 30,
    alignContent: 'center',
    
  },
});
