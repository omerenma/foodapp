import React from "react";
import { render } from "react-dom";
import { View, StyleSheet, TextInput, Text, Platform } from "react-native";

const Content = () => {
  return (
    <View style={styles.container}>
      <Text style={{ paddingLeft: 10 }}>List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "blue",
  },
});

export default Content;
