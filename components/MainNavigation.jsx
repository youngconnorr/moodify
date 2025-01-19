import { View, Text, StyleSheet } from "react-native";

const MainNavigation = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Heyy</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MainNavigation;
