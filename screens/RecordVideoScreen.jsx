import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const RecordVideoScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title} onPress={() => {
          navigation.navigate("RecordVideo");
        }}>Record your surroundings.</Text>
        <View>
        <Button title="Next" onPress={() => {
          navigation.navigate("Mood");
        }}/>
        </View>
        
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#F8F0FB",
    },
  
    button: {
      color: "black",
      backgroundColor: "#8075FF",
    }
  });
  
  export default RecordVideoScreen;
  