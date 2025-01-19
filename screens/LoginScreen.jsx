import { useState } from "react"
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { auth } from '../firebase'

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    alert('attempt login')
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert("successful login")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("login failed")
      });
  };
  return (
    <View style={styles.container}>
      <Text>dede</Text>
      <TextInput placeholder="Email" value={email} onChangeText={text => setEmail(text)}/>
      <TextInput placeholder="Password" value={password} onChangeText={text => setPassword(text)}/>
      <Button title={"OOOOOOOOOOO"} onPress={handleLogin}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreen;
