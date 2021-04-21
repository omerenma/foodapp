import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.containers}>
      <Text style={styles.text}>Food App!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  containers: {
    justifyContent: "center",
    backgroundColor: "orange",
  },
  text: {
    alignItems: "center",
    color: "green",
  },
});
