import React from "react";
import { useState, useEffect } from "react";
import { View, Text, Alert, StyleSheet, Button } from "react-native";

const TimeScreen = ({navigation}) => {
    const [time, setTime] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.instructions}>
        <Text style={styles.title}>Time</Text>
        <Text style={styles.description}>The current time is</Text>
      </View>
      <View style={styles.next}>
        <Button
          title="Next"
          onPress={() => {
            if (time.length != 0) {
              navigation.navigate("Weather");
            } else {
              Alert.alert("Please select a time.");
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

  title: {
    fontSize: 40,
    color: "#211A1D",
    fontWeight: "bold",
  },

  description: {
    marginTop: 10,
    fontSize: 20,
    color: "#211A1D",
  },

  instructions: {
    flex: 4,
    marginTop: 100,
    marginLeft: 50,
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

export default TimeScreen;
