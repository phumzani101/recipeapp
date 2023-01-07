import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import colors from "../../../components/shared/colors";

const HomeScreen = ({ navigation }) => {
  const goToRecipes = () => {
    navigation.navigate("Recipes");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title} onPress={goToRecipes}>
          Featured Recipes
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    color: colors.black,
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
});

export default HomeScreen;
