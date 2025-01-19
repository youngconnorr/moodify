import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";


const MakePlaylistScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title} onPress={() => {
          navigation.navigate("RecordVideo");
        }}>Create a playlist.</Text>
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

    title: {
      color: "#8075FF",
      fontWeight: "bold",
      fontSize: 30,
    }
  });
  
  export default MakePlaylistScreen;
  