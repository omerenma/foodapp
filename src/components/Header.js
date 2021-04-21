import React from "react";
import { render } from "react-dom";
import { View, StyleSheet, TextInput, Text } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={{ paddingLeft: 10 }}>Search</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: "green",
  },
});

export default Header;
