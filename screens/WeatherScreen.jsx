import React from "react";
import { useState, useEffect } from "react";
import { View, Text, Alert, StyleSheet, Button } from "react-native";

const WeatherScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      <View style={styles.instructions}>
        <Button title="Select your weather." />
      </View>
      <View style={styles.next}>
        <Button
          title="Next"
          onPress={() => {
            if (imageUri) {
              navigation.navigate("SongList");
            } else {
              Alert.alert("Please select a weather.");
            }
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    backgroundColor: "#F8F0FB",
  },

  instructions: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },

  select: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    marginTop: 20,
  },

  next: {
    flex: 1,
    alignItems: "center",
  },

  button: {
    color: "black",
    fontSize: 40,
  },

  selected: {
    fontSize: 40,
    borderWidth: 4,
    borderColor: "#211A1D",
    borderRadius: 50,
  },
});

export default WeatherScreen;
