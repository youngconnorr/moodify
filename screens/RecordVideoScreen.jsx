import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  Image,
  Alert,
  Button,
  StyleSheet,
} from "react-native";

import Circles from "../components/Circles";

const placeholder = {
  uri: "https://i.pinimg.com/736x/39/8f/ff/398fff0b30ef066f3e2a54d87b761bb2.jpg",
};
import { useRef, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as ImagePicker from "expo-image-picker";

const RecordVideoScreen = ({ navigation }) => {
  const [imageUri, setImageUri] = useState("");
  const [isImageAdded, setIsImageAdded] = useState(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  const showMessage = () => {
    Alert.alert("Upload image", "Choose a option", [
      {
        text: "Camera",
        onPress: () => openCamera(),
      },
      {
        text: "Gallery",
        onPress: () => openLibrary(),
      },
      {
        text: "Cancel",
        onPress: () => {
          return;
        },
      },
    ]);
  };

  useEffect(() => {
    console.log("State updated:", imageUri);
}, [imageUri]);

  
  const picturefromCamera = ""

  const openCamera = async () => {
    console.log("hello")
    await ImagePicker.requestCameraPermissionsAsync()
    
    const result = await ImagePicker.launchCameraAsync({
      // can be changed to VideosOnly
      base64: true,
      quality: 1,
      exif: false,
    });



    // console.log("result before state", bet)

    setImageUri(result.assets[0]);


    // if (result.cancelled) {
    //   console.log("User cancelled image picker");
    // } else {
    //   setImageUri(result.assets[0].uri);
    //   console.log("Image URI:", result.assets[0].uri);
    // }
  };

  const openLibrary = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      // can be changed to "videos" as well
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (result.cancelled) {
      console.log("User cancelled image picker");
    } else {
      setImageUri(result.assets[0].uri);
      setIsImageAdded(true);
      console.log("Image URI:", result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text
        style={styles.title}
        onPress={() => {
          navigation.navigate("RecordVideo");
        }}
      >
        Record your surroundings.
      </Text>
      <View>
        <Button title="Pick an image" onPress={showMessage} />
        {imageUri && (
          <View>
          <Image
            source={{ uri: imageUri.uri }}
            style={{ width: 200, height: 200 }}
          />
          <Button title="Remove image" onPress={() => {
            setImageUri("");
          }}/>
          </View>
        )}
        <Button
          title="Next"
          onPress={async () => {
            if (imageUri) {
              try {
                await AsyncStorage.setItem(
                  "imageurl",
                  imageUri.base64
                );
                console.log("image in storage")
              } catch (error) {
                // Error saving data
                console.error('Error saving data', error)
              }
              
              navigation.navigate("Mood");
            } else {
              Alert.alert("Please upload an image.");
            }
          }}
        />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#121212",
    opacity: 0.95,
  },
  
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: "20%",
    left: "10%",
    opacity: 0.95,
  },

  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    border: "1px solid black",
  },

  button: {
    color: "black",
    fontWeight: 6,
    fontSize: 18,
    textAlign: "center",
    margin: 10,
    borderWidth: 5,
    borderRadius: 20,
    height: 30,
    width: 300,
    borderColor: "white",
    backgroundColor: "white",
  },

  imageSection: {
    color: "white",
  },

  image: {
    flex: 1,
    justifyContent: "center",
  },

  placeholderImage: {
    height: 200,
    width: 300,
  },

  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },

  continue: {
    color: "black",
    fontWeight: 6,
    fontSize: 18,
    textAlign: "center",
    margin: 10,
    borderWidth: 5,
    borderRadius: 20,
    borderColor: "white",
    backgroundColor: "white",
  },

  bottomContainer: {
    justifyContent: "flex-end",
  },
});

export default RecordVideoScreen;
