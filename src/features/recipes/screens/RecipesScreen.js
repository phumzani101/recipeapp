import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Input from "../../../components/Input";
import colors from "../../../components/shared/colors";

const RecipesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Input />

      <Text style={styles.title}>Recipes</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  title: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "500",
  },
});

export default RecipesScreen;
