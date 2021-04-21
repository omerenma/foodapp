import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import Header from "./src/components/Header";
import Content from "./src/components/Content";

// Check for platform
const isAndroid = Platform.OS === "android";
export default function App() {
  return (
    <View>
      <View style={styles.containers}>
        <Header />
        <Content />
      </View>

      <ExpoStatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  containers: {
    marginTop: isAndroid ? StatusBar.currentHeight : 0,
  },
});
