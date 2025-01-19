import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const MoodScreen = () => {
    return (
      <View style={styles.container}>
        <Button title="Select your mood."/>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F8F0FB",
    },
  
    button: {
      color: "black",
      backgroundColor: "#8075FF",
    }
  });
  
  export default MoodScreen;
  